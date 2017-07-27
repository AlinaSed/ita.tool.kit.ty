'use srtict';
let mediator = require('../Mediator.js'),
    tpl = require('../view/tpl/tplModalSettings.js'),
    FilterAction = require('../model/FilterAction.js'),
    FilterCondition = require('../model/FilterCondition.js'),
    Filter = require('../model/Filter.js');

class AddFilterView {
    constructor(group) {
        this.body = document.body;
        this.group = group;
    }

    get selectors() {
        return {
            addFilterModal: '.add-filter-modal',
            saveFilterBtn: '.save-filter-btn',
            cancelFilterBtn: '.cancel-filter-btn',
            filterName: '.filter-name-input',
            gradeInput: '.grade-input',
            testDropDown: '.test-dropdown',
            actionDropDown: '.action-dropdown',
            conditionDropDown: '.condition-dropdown',
            modalBackdrop: '.modal-backdrop'
        };
    }

    show() {
        this.addLayover();
        this.body.insertAdjacentHTML('beforeEnd', tpl.addFilterModal);

        this.initTestDropDown();
        this.initActionDrowDown();
        this.initConditionDropDown();

        this.activate();
    }

    hide() {
        this.diactivate();
        document.querySelector(this.selectors.modalBackdrop).remove();
        document.querySelector(this.selectors.addFilterModal).remove();
    }


    activate() {
        $(this.selectors.saveFilterBtn).bind("click", this.saveFilter.bind(this));
        $(this.selectors.cancelFilterBtn).bind("click", this.hide.bind(this));
    }

    diactivate() {
        $(this.selectors.saveFilterBtn).unbind("click");
        $(this.selectors.cancelFilterBtn).unbind("click");
    }

    addLayover() {
        let modalBackdrop = `<div id="div" class="modal-backdrop fade in"></div>`;
        this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
    }

    saveFilter(event) {
        event.preventDefault();

        let filterName = document.querySelector(this.selectors.filterName).value,
            testDropDownValue = this.getDropDownValue(this.selectors.testDropDown),
            actionDropDownValue = this.getDropDownValue(this.selectors.actionDropDown),
            conditionDropDownValue = this.getDropDownValue(this.selectors.conditionDropDown),
            grade = document.querySelector(this.selectors.gradeInput).value,
            selectedTest,
            filter;

        selectedTest = this.group.testList.find((test) => {
            return test.name === testDropDownValue;
        })

        filter = new Filter(selectedTest, FilterAction[actionDropDownValue], FilterCondition[conditionDropDownValue], grade);

        mediator.pub('filterAdded', filter)

        this.hide();
    }

    initTestDropDown() {
        let options = '';
        this.testDropDown = document.querySelector(this.selectors.testDropDown);

        this.group.testList.forEach((test) => {
            options += `<option>${test.name}</option>`;
        });

        this.testDropDown.innerHTML = options;
    }

    initActionDrowDown() {
        let options = '';

        this.actionDropDown = document.querySelector(this.selectors.actionDropDown);

        for (let prop in FilterAction) {
            options += `<option>${prop}</option>`;
        }


        this.actionDropDown.innerHTML = options;
    }

    initConditionDropDown() {
        let options = '';
        this.conditionDropDown = document.querySelector(this.selectors.conditionDropDown);

        for (let prop in FilterCondition) {
            options += `<option>${FilterCondition[prop]}</option>`;
        }

        this.conditionDropDown.innerHTML = options;
    }

    getDropDownValue(selector) {
        let dropDown = document.querySelector(selector);

        return dropDown.options[dropDown.selectedIndex].text
    }
}

module.exports = AddFilterView;