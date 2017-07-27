'use strict';

let ExamItemView = require('../view/examItemView.js'),
    ModalTestView = require('../view/modalTestView.js'), 
    mediator = require('../Mediator.js');

class TestListController {
    constructor() {
        this.activate();
        this.section = document.querySelector('#test-section');
    }

    activate() {
        mediator.sub('groupSelected', this.groupSelectedHandler.bind(this));
        mediator.sub('testModal:open', this.createModalTest.bind(this));
    }


    createModalTest () {
        let modalTestView = new ModalTestView();
        
        modalTestView.show();
    }

    groupSelectedHandler(group) {
        group.testList.forEach((currentTest) => {
            this.examView = new ExamItemView(currentTest);
            this.examView.render();
        });
    }
}

module.exports = TestListController;