'use strict'
let mediator = require('../Mediator.js'),
    tpl = require('../view/tpl/tplModalSettings.js');

class AddExamModalView {

    constructor(group) {
        this.body = document.body;
        this.editGroupTestTemplate = tpl.editGroupTestModal;
        this.currentGroup = group;
    }

    get selectors() {
        return {
            modal: '.edit-group-test-modal',
            modalBackdrop: '.modal-backdrop',
            closeBtn: '.close-edit-test-btn'
        };
    }

    show() {
        this.addLayover();
        let testListOption = this.getTestList();
        this.editGroupTemplate = this.editGroupTestTemplate.replace('{test-list}', testListOption);
        this.body.insertAdjacentHTML('beforeEnd', this.editGroupTemplate);
        this.activate();
    }

    getTestList() {
        let testListOption = '';

        this.currentGroup.testList.forEach((test) => {
            testListOption += `<p>${test.name} Max grade: ${test.maxGrade}</p>`
        })

        return testListOption;
    }

    hide() {
        this.diactivate();
        document.querySelector(this.selectors.modalBackdrop).remove();
        document.querySelector(this.selectors.modal).remove();
    }

    activate() {
        $(this.selectors.closeBtn).bind("click", this.hide.bind(this));
    }

    diactivate() {
        $(this.selectors.closeBtn).unbind("click");
    }

    addLayover() {
        let modalBackdrop = `<div id="div" class="modal-backdrop fade in"></div>`;
        this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
    }
}

module.exports = AddExamModalView;