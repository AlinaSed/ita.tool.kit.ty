'use strict';

let Person = require('../model/Person.js'),
    PeopleAsignView = require('../view/asignPeopleView.js'), 
    ResultView = require('../view/resultView.js'),
    mediator = require('../Mediator.js');

class PeopleController {
	constructor () {
        this.text;
        this.activate();
	}

	activate () {
		mediator.sub('assignPeople:open', this.openAssignPeople.bind(this));
        mediator.sub('assignPeople:close', this.closeAssignPeople.bind(this));
	}

	openAssignPeople () {
		let peopleAsignView = new PeopleAsignView();
        
        peopleAsignView.render();
	}

    closeAssignPeople () {
        this.remove();
        this.generatePeopleInfo();
    }

    remove () {
        let peopleAsignView = new PeopleAsignView();
        this.text = peopleAsignView.transferToController();
        peopleAsignView.remove();    
    }   

    generatePeopleInfo () {
        let arrayOfPeople = this.text.match(/[^\n]+/g),
            people = [];

            
        arrayOfPeople.forEach(function(user) {
            let arrayOfPerson = user.split(' '),
                personOfObj = {};
  
            personOfObj.name = arrayOfPerson[0];
            personOfObj.surname = arrayOfPerson[1];
            personOfObj.email = arrayOfPerson[2];

            let person = new Person(personOfObj.name, personOfObj.surname, personOfObj.email);

            people.push(personOfObj);
         
        });

        this.showResult(people);
    }

    showResult (people) {
        let resultView = new ResultView(people); 
    }
}

module.exports = PeopleController;