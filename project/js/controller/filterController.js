'use strict';

let FilterItemView = require('../view/filterItemView.js'),
    mediator = require('../Mediator.js'),
    AddFilterView = require('../view/addFilterView.js')

class FilterController {
    constructor() {
        this.selectedGroup = null;
        this.activate();
    }

    activate() {
        mediator.sub('groupSelected', this.groupSelectedHandler.bind(this));
        mediator.sub('renderAddFilterView', this.renderAddFilterViewHandler.bind(this));
        mediator.sub('filterAdded', this.addFilterHandler.bind(this));
    }

    groupSelectedHandler(group) {
        this.selectedGroup = group;
        group.filterList.forEach((filter) => {
            let filterItemView = new FilterItemView(filter);
            filterItemView.render();
        })
    }

    renderAddFilterViewHandler() {
        let addFilterView = new AddFilterView(this.selectedGroup);
        addFilterView.show();
    }

    addFilterHandler(filter) {
        this.selectedGroup.filterList.push(filter);
        let filterItemView = new FilterItemView(filter);
        filterItemView.render();
    }

}

module.exports = FilterController;