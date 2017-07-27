'use strict';

let mediator = require('../Mediator.js'),
	template = require('./tpl/tplAsignUsers.js');

class PeopleAsignView {
	constructor () {
	}

	show () {
		this.addLayerGrey();
		this.render();
		this.subscribe();
	}

	addLayerGrey () {
        let layer = `<div id="layer" class="modal-backdrop fade in"></div>`;
        document.body.insertAdjacentHTML('beforeEnd', layer);
	}

	render () {
    	document.body.insertAdjacentHTML('beforeEnd', template);
	}

	subscribe () {
		document.body.querySelector('.button-save-people').addEventListener('click',
			this.saveGroup.bind(this));
		document.body.querySelector('.button-close-people').addEventListener('click',
			this.delete.bind(this));
	}

	unscribe () {
		document.body.querySelector('.button-save-people').removeEventListener('click',
			this.saveGroup.bind(this));
		document.body.querySelector('.button-close-people').removeEventListener('click',
			this.delete.bind(this));
	}

	saveGroup () {
		let listOfPeople = document.body.querySelector('.people-input-area').value;
		mediator.pub('assignPeople:saved', listOfPeople);

		this.delete();
	}

	delete () {
		this.unscribe();
		document.body.querySelector('.people-input-area').value = '';
		this.clearPeopleModal();
		document.body.querySelector('.modal-backdrop').remove();
	}


	clearPeopleModal () {
		document.body.querySelector('.add-people-modal').remove();
	}
}

module.exports = PeopleAsignView;