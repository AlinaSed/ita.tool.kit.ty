'use strict';

let ExamItemView = require('../view/examItemView.js'),
    mediator = require('../Mediator.js');

class TestListController {
    constructor(testListView) {
        this.testListView = testListView;
        this.activate();
    }

    activate() {
        mediator.sub('groupSelected', this.groupSelectedHandler.bind(this));
    }

    groupSelectedHandler(group) {
        this.testListView.renderTest(group);
    }
}

module.exports = TestListController;