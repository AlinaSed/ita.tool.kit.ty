'use strict';

let tpl = require('./tpl/tplModalSettings.js'),
    mediator = require('../Mediator.js');

class SettingsView {
    constructor (settings) {
        this.settings = settings;
        this.modalContainer = document.querySelector('.modal-container');

        this.showSettingsWindow();
        this.renderDirectionNames();
        this.activate();
    }

    showSettingsWindow () {
        let darkLayer = document.createElement('div'),
            buttonClose,
            closeSettings;

        darkLayer.id = 'shadow'; //darkLayer.classList.add('shadow');
        document.body.appendChild(darkLayer);
        this.modalContainer.innerHTML = tpl.settingsModal;
        this.modalContainer.style.display = 'block'; 
        buttonClose = this.modalContainer.querySelector('.close-button');

        closeSettings = () => {
            darkLayer.parentNode.removeChild(darkLayer);
            this.modalContainer.style.display = 'none';
        };
        
        buttonClose.addEventListener('click', closeSettings, false);
        darkLayer.addEventListener('click', closeSettings, false);
    }

    renderDirectionNames () {
        let directionSelect = this.modalContainer.querySelector('.direction-select');

        directionSelect.innerHTML = tpl.settingsDropDown(this.settings.directionList);
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
        listContainer.innerHTML = tpl.settingsTests(direction.testList);  

        buttonAddTest = this.modalContainer.querySelector('.add-test');
        buttonAddTest.addEventListener('click', () => { 
            console.log('Add Test');
            let addTestContainer = this.modalContainer.querySelector('.new-test-input'),
                newTestName, 
                newTestMaxGrade, 
                buttonSaveTest;

            addTestContainer.innerHTML = tpl.settingsAddTest;
            newTestName = addTestContainer.querySelector('.new-test-name');
            newTestMaxGrade = addTestContainer.querySelector('.new-test-max');
            buttonSaveTest = addTestContainer.querySelector('.save-new-test');

            buttonSaveTest.addEventListener('click', () => {
                let name = newTestName.value,
                    maxGrade = newTestMaxGrade.value;

                mediator.pub('group:created', {name, maxGrade});
                console.log(name, maxGrade);
            }, false);

        }, false);
    }

    renderFilters (directionName) {
        let listContainer = this.modalContainer.querySelector('.tests-filters-container'),
            buttonAddFilter,
            direction;

        direction = this.settings.directionList.find((direction) => directionName === direction.name);
        listContainer.innerHTML = tpl.settingsFilters(direction.filterList);  
        buttonAddFilter = this.modalContainer.querySelector('.add-filter');

        buttonAddFilter.addEventListener('click', () => {
            console.log('add filter');
        }, false);
    }
}

module.exports = SettingsView;
