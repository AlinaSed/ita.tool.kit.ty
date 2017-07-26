'use strict';

let mediator = require('../Mediator.js');

class PeopleAsignView {
	constructor () {
		this.section = document.querySelector('#day-section');
		this.template;
	}

	render () {
		this.template =     
			`<div class="people-modal">
				<textarea class="people-input-area"></textarea>
				<button class="button-close-people">push me</button>
			</div>
    	`;

    	this.section.insertAdjacentHTML('beforeEnd', this.template);

    	this.deactivate();
	}

	deactivate () {
        let buttonClose = document.querySelector('.button-close-people');
            buttonClose.addEventListener('click', () => {
            mediator.pub('assignPeople:close');
        });
    }

	remove () {
		this.template = '';
		this.section.querySelector('.people-input-area').value = '';
		this.clearPeopleModal();
	}

	transferToController () {
		return this.section.querySelector('.people-input-area').value;
	}

	clearPeopleModal () {
		this.section.querySelector('.people-modal').remove();
	}
}

module.exports = PeopleAsignView;