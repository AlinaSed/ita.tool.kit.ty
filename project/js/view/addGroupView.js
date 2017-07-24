'use srtict';

let mediator = require('../Mediator.js');

class AddGroupView {
    constructor (settings) {
        this.directionDropDown = document.querySelector(this.selectors.directionDropDown);
        this.groupNameInput = document.querySelector(this.selectors.groupNameInput);
        this.closeButton = document.querySelector(this.selectors.closeButton);
        this.modal = document.querySelector(this.selectors.modal);
        this.save = document.querySelector(this.selectors.save);
        this.body = document.body;
        this.settings = settings;
    }

    get selectors () {
        return {
            closeButton: '#close-button',
            save: '#save-group',
            modal: '#add-group-modal',
            directionDropDown: '#direction-dropdown',
            groupNameInput: '#group-name',
            modalBackdrop: '.modal-backdrop'
        };
    }

    show () {
        let modalBackdrop = '<div id="modal-backdrop" class="modal-backdrop fade in"></div>';
        
        this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
        this.body.classList.add('modal-open');
        this.body.classList.add('with-modal');
        this.modal.classList.add('display');
        this.modal.classList.add('in');
        this.fillDirectionDropDown();
        this.activate();
    }

    hide () {
        this.diactivate();

        this.body.classList.remove('modal-open');
        this.body.classList.remove('with-modal');
        this.modal.classList.remove('display');
        this.modal.classList.remove('in');

        document.querySelector(this.selectors.modalBackdrop).remove();
    }


    activate () {
        $(this.selectors.save).bind('click', this.saveGroup.bind(this));
        $(this.selectors.closeButton).bind('click', this.hide.bind(this));
    }

    diactivate () {
        $(this.selectors.save).unbind('click');
        $(this.selectors.closeButton).unbind('click');
        this.clearModalInput();
    }

    saveGroup (event) {
        event.preventDefault();

        let directionValue = this.directionDropDown.options[this.directionDropDown.selectedIndex].text,
            groupNameValue = this.groupNameInput.value,
            selectedDirection = this.settings.directionList.find((value) => {
                return value.name === directionValue;
            });

        mediator.pub('saveGroup', {
            groupdName: groupNameValue,
            direction: selectedDirection
        });

        this.hide();
    }

    fillDirectionDropDown () {
        let options = '';

        this.settings.directionList.forEach((direction) => {
            options += `<option>${direction.name}</option>`;
        });
        this.directionDropDown.innerHTML = options;
    }

    clearModalInput () {
        this.groupNameInput.value = '';
    }
}

module.exports = AddGroupView;