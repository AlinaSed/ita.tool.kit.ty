'use strict';

let Person = require('../model/Person.js'),
    PeopleInfoView = require('../view/peopleInfoView.js'), 
    mediator = require('../Mediator.js');

class PeopleController {
	constructor () {
        this.activate();
	}

	activate () {
		mediator.sub('assignPeople:open', this.openPeopleInfo.bind(this));
	}

	openPeopleInfo () {
		let peopleInfoView = new PeopleInfoView();
        
        peopleInfoView.show();
	}

}

module.exports = PeopleController;