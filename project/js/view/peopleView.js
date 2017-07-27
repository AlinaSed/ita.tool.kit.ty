'use strict';

let mediator = require('../Mediator.js');

class PeopleView {
	constructor () {
		this.section = document.querySelector('#day-section');
        this.activate();
	}

	activate () {
        let buttonOpen = this.section.querySelector('.button-open-people');
		buttonOpen.addEventListener('click', () => {
			mediator.pub('assignPeople:open');
		});
	}
}

module.exports = PeopleView;

