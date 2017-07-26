'use strict';

let mediator = require('../Mediator.js');

class PeopleView {
	constructor () {
        this.activate();
	}

	activate () {
        let buttonOpen = document.querySelector('.button-open-people');
		buttonOpen.addEventListener('click', () => {
			mediator.pub('assignPeople:open');
		});
	}
}

module.exports = PeopleView;

