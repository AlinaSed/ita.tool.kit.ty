'use strict';

let DayItemView = require('../view/dayItemView.js'),
    mediator = require('../Mediator.js');

class DayListController {
    constructor() {
        this.activate();
    }

    activate() {
        mediator.sub('groupSelected', this.groupSelectedHandler);
    }

    groupSelectedHandler(group) {
        group.day.forEach((currentTest) => {
            let dayView = new DayItemView(currentTest);
            dayView.render();
        });
    }

}

module.exports = DayListController;
