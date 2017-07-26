'use strict';

let mediator = require('../Mediator.js');

class DayItemView {
    constructor(day) {
        this.container = document.querySelector(this.selectors.daySection);
        this.day = day;
    }

    get selectors() {
        return {
            daySection: '.test-days'
        };
    }


    render() {
        let template = `<div class="test-item col-xs-2 panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">${this.day.date} </h3>
                            <h3 class="panel-title">${this.day.time} </h3>
                        </div>
                        <div class="panel-body">
                        </div>
                        </div>`;

        this.container.insertAdjacentHTML('afterBegin', template);
    }

    selectGroupItem() {
        mediator.pub('groupSelected', this.currentGroup);
    }
}

module.exports = DayItemView;

