'use strict';

let DayItemView = require('../view/dayItemView.js'),
    mediator = require('../Mediator.js');

class DayListController {
    constructor () {
        this.activate();
    }

    activate () {
        mediator.sub('group:selected', this.groupSelectedHandler);
    }

    groupSelectedHandler (group) {
        let dayView = new DayItemView (group.day);

        dayView.renderDay();
        dayView.renderTimeSlot();
    }

}

module.exports = DayListController;
