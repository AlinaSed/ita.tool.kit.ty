'use strict';

let Person = require('../model/Person.js'),
    PeopleAsignView = require('../view/asignPeopleView.js'), 
    ResultView = require('../view/resultView.js'),
    mediator = require('../Mediator.js');

class PeopleController {
	constructor () {
        this.activate();
	}

	activate () {
		mediator.sub('assignPeople:open', this.openAssignPeople.bind(this));
        mediator.sub('assignPeople:saved', this.generatePeopleInfo.bind(this));
	}

	openAssignPeople () {
		let peopleAsignView = new PeopleAsignView();
        
        peopleAsignView.show();
	}

    generatePeopleInfo (listOfPeople) {
        let arrayOfPeople = listOfPeople.match(/[^\n]+/g),
            people = [];

            
        arrayOfPeople.forEach((user) => {
            let arrayOfPerson = user.split(' '),
                personOfObj = {};

            //check validation using reg exp
            personOfObj.name = (this.checkNameOrSurname(arrayOfPerson[0]))? arrayOfPerson[0] : 'no valid';
            personOfObj.surname = (this.checkNameOrSurname(arrayOfPerson[1]))? arrayOfPerson[1] : 'no valid';
            personOfObj.email = (this.checkEmail(arrayOfPerson[2]))? arrayOfPerson[2] : 'no valid';
       
            let person = new Person(personOfObj.name, personOfObj.surname, personOfObj.email);

            people.push(person);
        });

        this.showResult(people);
    }

    checkNameOrSurname (name) {
        let validationNameOrSurname = /([a-zA-Z ]){2,30}/;

        return validationNameOrSurname.test(name);
    }

    checkEmail (email) {
        let validationEmail = /\S+@\S+\.\S+/;

        return validationEmail.test(email);
    }

    showResult (people) {
        let resultView = new ResultView(people); 
    }
}

module.exports = PeopleController;