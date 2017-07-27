'use strict';

let TestItemView = require('../view/testItemView.js'),
    mediator = require('../Mediator.js');

class TestListController {
    constructor(testListView) {
        this.testListView = testListView;
        this.activate();
    }

    activate() {
        mediator.sub('group:selected', this.groupSelectedHandler.bind(this));
    }

    groupSelectedHandler(group) {
        this.testListView.renderTest(group);
    }
}

module.exports = TestListController;