'use srtict';
let mediator = require('../Mediator.js'),
    tpl = require('../view/tpl/tplModalSettings.js');

class EditGroupView {
    constructor(settings) {

        this.body = document.body;
        this.settings = settings;
    }

    get selectors() {
        return {
            closeButton: '.edit-group-modal .close-group-btn',
            save: '.edit-group-modal .save-group-btn',
            modal: '.edit-group-modal',
            directionDropDown: '.add-group-modal .direction-dropdown',
            groupNameInput: '#group-name',
            modalBackdrop: '.modal-backdrop'
        };
    }

    show() {
        this.addLayover();
        this.body.insertAdjacentHTML('beforeEnd', tpl.addGroupModal);
        this.fillDirectionDropDown();
        this.activate();
    }

    hide() {
        this.diactivate();
        document.querySelector(this.selectors.modalBackdrop).remove();
        document.querySelector(this.selectors.modal).remove();
    }

    activate() {
        $(this.selectors.save).bind("click", this.saveGroup.bind(this));
        $(this.selectors.closeButton).bind("click", this.hide.bind(this));
    }

    diactivate() {
        $(this.selectors.save).unbind("click");
        $(this.selectors.closeButton).unbind("click");
    }

    addLayover() {
        let modalBackdrop = `<div id="div" class="modal-backdrop fade in"></div>`;
        this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
    }

    saveGroup(event) {
        event.preventDefault();

        let directionDropDown = document.querySelector(this.selectors.directionDropDown),
            directionValue = directionDropDown.options[directionDropDown.selectedIndex].text,
            groupNameValue = document.querySelector(this.selectors.groupNameInput).value,
            selectedDirection = this.settings.directionList.find((value) => {
                return value.name === directionValue;
            });

        mediator.pub('saveGroup', {
            groupdName: groupNameValue,
            direction: selectedDirection
        });

        this.hide();
    }

    fillDirectionDropDown() {
        let options = '',
            directionDropDown = document.querySelector(this.selectors.directionDropDown);

        this.settings.directionList.forEach((direction) => {
            options += `<option>${direction.name}</option>`;
        });
        directionDropDown.innerHTML = options;
    }
}

module.exports = EditGroupView;