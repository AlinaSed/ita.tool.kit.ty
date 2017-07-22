'use strict';

let mediator = require('../Mediator.js');

class GroupListView {
    constructor(settings) {
        this.settings = settings;
        this.activate();
    }

    get selectors() {
        return {
            addGroupButton: '#add-group',
            directionDrowDown: '#direction-dropdown',
            saveGroup: '#save-group',
            groupNameInput: '#group-name',
            addGroupdModal: '#myModal'
        };
    }

    activate() {
        document.querySelector(this.selectors.addGroupButton).addEventListener('click', () => {
            mediator.pub('openAddGroupdDialog');
        });

        document.querySelector(this.selectors.saveGroup).addEventListener('click', (event) => {
            event.preventDefault();
            
            let directionDrowDownElement = document.querySelector(this.selectors.directionDrowDown);
            let groupNameValue = document.querySelector(this.selectors.groupNameInput).value;
            let directionValue = directionDrowDownElement.options[directionDrowDownElement.selectedIndex].text;
            let selectedDirection = this.settings.directionList.filter((value) => {
                return value.name === directionValue;
            })[0];

            mediator.pub('saveGroup', {
                groupdName: groupNameValue,
                direction: selectedDirection
            });

            $(this.selectors.addGroupdModal).modal('hide');
        });

        $(this.selectors.addGroupdModal).on('hidden.bs.modal', () => {
            this.clearModalInput();
        });
    }

    fillDirectionDropDown() {
        let directionDrowDown = document.querySelector(this.selectors.directionDrowDown);

        //clear select options 
        directionDrowDown.innerHTML = '';

        this.settings.directionList.forEach((direction) => {
            directionDrowDown.insertAdjacentHTML('afterBegin', `  <option>${direction.name}</option>`);
        });
    }

    clearModalInput() {
        document.querySelector(this.selectors.groupNameInput).value = '';
    }
}

module.exports = GroupListView;

