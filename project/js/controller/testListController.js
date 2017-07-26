'use strict';

let ExamItemView = require('../view/examItemView.js'),
    mediator = require('../Mediator.js');
    
class TestListController {
    constructor() {
        this.activate();
    }

    activate() {
        mediator.sub('groupSelected', this.groupSelectedHandler);
    }

    groupSelectedHandler(group) {
        group.testList.forEach((currentTest) => {
            let examView = new ExamItemView(currentTest);
            examView.render();
        });
    }

}

module.exports = TestListController;