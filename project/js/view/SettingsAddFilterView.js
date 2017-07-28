'use strict';

let tplSettings = require('./tpl/tpl.settings.js'),
    mediator = require('../Mediator.js');

class SettingsAddFilterView {
    constructor (direction) {
        this.direction = direction;
        this.modalContainer = document.querySelector('.modal-container');

        this.renderAddFilterModal(direction);
        this.activate();
    }

    renderAddFilterModal (direction) {
        let testListContainer,
            testListForFilter = [],
            selectedTestsContainer,
            filterNameInput,
            actionSelect,
            conditionSelect,
            gradeInput,
            saveFilterButton;

        this.modalContainer.innerHTML = tplSettings.addFilter(direction);
        testListContainer = this.modalContainer.querySelector('.tests-for-filter');
        selectedTestsContainer = this.modalContainer.querySelector('.selected-tests');
        filterNameInput = this.modalContainer.querySelector('.new-filter-name');
        actionSelect = this.modalContainer.querySelector('.filter-action');
        conditionSelect = this.modalContainer.querySelector('.filter-condition');
        gradeInput = this.modalContainer.querySelector('.filter-grade');
        saveFilterButton = this.modalContainer.querySelector('.save-new-filter');

        testListContainer.addEventListener('click', (event) => {
            let testName = event.target.innerHTML,
                test = direction.testList.find((test) => testName === test.name);

            if (testListForFilter.every((test) => testName !== test.name)) {
                testListForFilter.push(test);
                selectedTestsContainer.innerHTML += `<li>${testName}</li>`;
            }
        }, false);

        saveFilterButton.addEventListener('click', () => {
            let filterName, action, condition, grade;

            filterName = filterNameInput.value;
            action = actionSelect.options[actionSelect.selectedIndex].value;
            condition = conditionSelect.options[conditionSelect.selectedIndex].value;
            grade = gradeInput.value;

            direction.addFilter(testListForFilter, action, condition, grade, filterName);
            mediator.pub('filter:created');
        }, false);
    }

    activate () {
        console.log('activate');
    }
}

module.exports = SettingsAddFilterView;