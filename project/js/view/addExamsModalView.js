'use strict'
let mediator = require('../Mediator.js'),
    tpl = require('../view/tpl/tplModalSettings.js');

class AddExamModalView {

    constructor(group) {
        this.group = group;
        this.body = document.body;
        this.editGroupTestTemplate = tpl.editGroupTestModal;
        this.currentGroup = group;
        this.addedExams = [];
    }

    get selectors() {
        return {
            modal: '.edit-group-test-modal',
            modalBackdrop: '.modal-backdrop',
            closeBtn: '.close-edit-test-btn',
            container :'.modal-content',
            addBtn : '.add-exam-btn',
            examInput: '.form-control',
            examsConteiner :'.edit-group-test-modal .test-list',
            saveExamsBtn : '.save-new-exams-btn'
        };
    }

    show() {
        this.addLayover();
        let testListOption = this.getTestList();
        this.editGroupTemplate = this.editGroupTestTemplate.replace('{test-list}', testListOption);
       
        this.body.insertAdjacentHTML('beforeEnd', this.editGroupTemplate);
        this.container = document.querySelector(this.selectors.container);
        this.addBtn = this.container.querySelector(this.selectors.addBtn);
        this.closeBtn = this.container.querySelector(this.selectors.closeBtn);
        this.examsConteiner = this.container.querySelector(this.selectors.examsConteiner);
        this.saveExamsBtn = this.container.querySelector(this.selectors.saveExamsBtn);

        this.activate();
    }

    getTestList() {
        let testListOption = '';

        this.currentGroup.testList.forEach((test) => {
            testListOption += `<p>${test.name}</p>`;
        });

        return testListOption;
    }

    hide() {
        this.diactivate();
        document.querySelector(this.selectors.modalBackdrop).remove();
        document.querySelector(this.selectors.modal).remove();
    }

    addNewExamHandler () {
        let newExam = document.querySelector(this.selectors.examInput).value;
        let examInputArea = `<p>${newExam}</p>`;
        let examInput = document.querySelector(this.selectors.examInput);

        this.addedExams.push(newExam);
        examInput.value = '';
        this.examsConteiner.insertAdjacentHTML('beforeEnd', examInputArea);  
    }

    saveNewExamHandler() {
        mediator.pub('examModal:added', {group : this.group, addedTests: this.addedExams});
        this.addedExams = [];
        this.hide();
    }

    activate() {
        this.addBtn.addEventListener('click', this.addNewExamHandler.bind(this));
        this.closeBtn.addEventListener('click', this.hide.bind(this));
        this.saveExamsBtn.addEventListener('click', this.saveNewExamHandler.bind(this));
    }

    diactivate() {
        this.closeBtn.removeEventListener('click', this.hide);
    }

    addLayover() {
        let modalBackdrop = `<div id="div" class="modal-backdrop fade in"></div>`;
        this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
    }
}

module.exports = AddExamModalView;