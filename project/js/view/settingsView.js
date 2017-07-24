'use strict';

class SettingsView {
    constructor (settings) {
        this.settings = settings;
        this.testFilterSwitcher = 'T';

        this.showSettingsWindow();
        this.renderDirectionNames();
        this.activate();
    }

    showSettingsWindow () {
        let darkLayer = document.createElement('div'),
            //modalContainer = document.querySelector('#modal-container');
            modalWin = document.querySelector('#settings');

        darkLayer.id = 'shadow'; //darkLayer.setAtribute('id') = 'shadow';
        document.body.appendChild(darkLayer);
        //modalContainer.innerHTML = tpl.modalSettings();
        //modalContainer.style.display = 'block'; 
        modalWin.style.display = 'block';

        darkLayer.addEventListener('click', () => {
            darkLayer.parentNode.removeChild(darkLayer);
            //modalContainer.style.display = 'none';
            modalWin.style.display = 'none';
            return false;
        }, false);
    }

    renderDirectionNames () {
        let directionSelect = document.querySelector('#directionSelect'),
            optionList = '',
            tpl = '';

//console.log(directionSelect);

        this.settings.directionList.forEach((direction, i) => {
            optionList += `
                <option ${(i = 0) ? 'selected' : ''} value="${direction.name}">
                    ${direction.name}
                </option>
            `;
        });

        tpl = `
            <select id="settings-directions-select" class="direction"> 
                ${optionList} 
                <option value="addDirection"> Add direction </option>
            </select>
        `;

        directionSelect.innerHTML = tpl;
    }

    activate () {
        let buttonTests, 
            buttonFilters,
            elSelect;

        buttonTests = document.querySelector('#showTestList');
        buttonFilters = document.querySelector('#showFilterList');
        elSelect = document.querySelector('#settings-directions-select');

        elSelect.addEventListener('change', () => {
            let selectedDirectionName;

            selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;
            if (selectedDirectionName === 'addDirection') {
                
            } else {
                this.renderTestsOrFilters(selectedDirectionName);
            }
        }, false);

        buttonTests.addEventListener('click', () => {
            let elSelect = document.querySelector('#settings-directions-select'),
                selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;
            
            this.testFilterSwitcher = 'T';
            this.renderTestsOrFilters(selectedDirectionName);
            //mediator.pub('showTestList', options);
        }, false);

        buttonFilters.addEventListener('click', () => {
            let elSelect = document.querySelector('#settings-directions-select'),
                selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;

            this.testFilterSwitcher = 'F';
            this.renderTestsOrFilters(selectedDirectionName);
            //mediator.pub('showFilterList', options);
        }, false);
    }

    renderTestsOrFilters (directionName) {
        if (this.testFilterSwitcher === 'T') {
            this.renderTests(directionName);
        } else {
            this.renderFilters(directionName);
        }
    }

    renderTests (directionName) {
        let listContainer = document.querySelector('#tests-filters-container'),
            //testListContainer = document.querySelector('#TestListOfDirection'),
            tpl = `<div>Tests<ul>`,
            buttonAddTest,
            direction;

        direction = this.settings.directionList.find((direction) => directionName === direction.name);
        direction.testList.forEach((test) => tpl += `<li>${test.name}</li>`);
        tpl += `</ul><button id="add-test"onclick="console.log('Add Test')">Add test</button></div>`;
        listContainer.innerHTML = tpl;  //direction.filterList[0];

       // buttonAddTest = document.querySelector('#add-test');//document.createElement('button');
        //buttonAddTest.id = 'add-test';
        // listContainer.appendChild(buttonAddTest);
        //buttonAddTest.addEventListener('click', console.log('Add Test'), false);
    }

    renderFilters (directionName) {
        let listContainer = document.querySelector('#tests-filters-container'),
            //filterListContainer = document.querySelector('#FilterListOfDirection'),
            tpl = `<div>Filters<ul>`,
            buttonAddFilter,
            direction;

        direction = this.settings.directionList.find((direction) => directionName === direction.name);
        direction.filterList.forEach((filter) => tpl += `<li>${filter}</li>`);
        tpl += `</ul><button id="add-filter">Add filter</button></div>`;
        listContainer.innerHTML = tpl;  //direction.filterList[0];
        buttonAddFilter = document.querySelector('#add-filter');
        buttonAddFilter.addEventListener('click', console.log('add filter'), false); //preventDefault, stopPropagation
    }
}

module.exports = SettingsView;
