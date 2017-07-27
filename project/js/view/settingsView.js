'use strict';

let tplSettings = require('./tpl/tpl.settings.js'),
    mediator = require('../Mediator.js');

class SettingsView {
    constructor (settings) {
        this.settings = settings;
        this.modalContainer = document.querySelector('.modal-container');

     /*   this.showSettingsWindow();
        this.renderDirectionNames();
        this.activate();*/
    }

    showSettingsWindow () {
        let darkLayer = document.createElement('div'),
            buttonClose,
            buttonAddDirection,
            closeSettings;

        darkLayer.id = 'shadow'; //darkLayer.classList.add('shadow');
        document.body.appendChild(darkLayer);
        this.modalContainer.innerHTML = tplSettings.Modal; 
        this.modalContainer.style.display = 'block'; 
        buttonClose = this.modalContainer.querySelector('.close-button');
        buttonAddDirection = this.modalContainer.querySelector('.add-direction');

        closeSettings = () => {
            darkLayer.parentNode.removeChild(darkLayer);
            this.modalContainer.style.display = 'none';
        };
        
        darkLayer.addEventListener('click', closeSettings, false);
        buttonClose.addEventListener('click', closeSettings, false);
        buttonAddDirection.addEventListener('click', () => {
            let inputNewDirection = this.modalContainer.querySelector('.input-new-direction');

            this.settings.addDirection(inputNewDirection.value);
            inputNewDirection.value = '';
            mediator.pub('direction:created');
        }, false);
    }

    renderDirectionNames () {
        let directionSelect = this.modalContainer.querySelector('.direction-select');

        directionSelect.innerHTML = tplSettings.DropDown(this.settings.directionList);
    }

    activate () {
        let elSelect = this.modalContainer.querySelector('.settings-directions-select'),
            buttonFilters = this.modalContainer.querySelector('.show-filter-list'),
            buttonTests = this.modalContainer.querySelector('.show-test-list');

        elSelect.addEventListener('change', () => {
            let selectedDirectionName;

            selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;

            if (selectedDirectionName === 'addDirection') {
                
            } else {
                this.renderTests(selectedDirectionName);
            }
            
        }, false);

        buttonTests.addEventListener('click', () => {
            let selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;
            
            this.renderTests(selectedDirectionName);
        }, false);

        buttonFilters.addEventListener('click', () => {
            let selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;

            this.renderFilters(selectedDirectionName);
        }, false);
    }

    renderTests (directionName) {
        let listContainer = this.modalContainer.querySelector('.tests-filters-container'),
            buttonAddTest,
            direction;

        direction = this.settings.directionList.find((direction) => directionName === direction.name);
        listContainer.innerHTML = tplSettings.Tests(direction.testList);  

        buttonAddTest = this.modalContainer.querySelector('.add-test');
        buttonAddTest.addEventListener('click', () => { 
            console.log('Add Test');
            let addTestContainer = this.modalContainer.querySelector('.new-test-input'),
                newTestName, 
                newTestMaxGrade, 
                buttonSaveTest;

            addTestContainer.innerHTML = tplSettings.AddTest;
            newTestName = addTestContainer.querySelector('.new-test-name');
            newTestMaxGrade = addTestContainer.querySelector('.new-test-max');
            buttonSaveTest = addTestContainer.querySelector('.save-new-test');

            buttonSaveTest.addEventListener('click', () => {
                direction.addTest(newTestName.value);
                mediator.pub('test:created', directionName);
            }, false);

        }, false);
    }

    renderFilters (directionName) {
        let listContainer = this.modalContainer.querySelector('.tests-filters-container'),
            buttonAddFilter,
            direction;

        direction = this.settings.directionList.find((direction) => directionName === direction.name);
        listContainer.innerHTML = tplSettings.Filters(direction.filterList);  
        buttonAddFilter = this.modalContainer.querySelector('.add-filter');

        buttonAddFilter.addEventListener('click', () => {
            console.log('add filter');
            mediator.pub('open:add-filter-modal', direction);
        }, false);
    }
}

module.exports = SettingsView;
