'use strict';

let mediator = require('../Mediator.js'),
    tpl = require('./tpl/tplModalSettings.js');

class FilterListView {
    constructor() {
        this.filterSection = document.querySelector(this.selectors.filterSection);
        this.render();
    }

    get selectors() {
        return {
            filterSection: '#filter-section',
            addFilterBtn: '.add-custom-filter',
            filterList: '.filter-list'
        };
    }

    activate() {
        let addFilterBtn = document.querySelector(this.selectors.addFilterBtn);

        mediator.sub('groupSelected', this.clearFilterListHandler.bind(this))

        addFilterBtn.addEventListener('click', () => {
            mediator.pub('renderAddFilterView');
        })
    }

    render() {
        this.filterSection.innerHTML = tpl.filterSection;
        this.activate();
    }

    clearFilterListHandler() {
        document.querySelector(this.selectors.filterList).innerHTML = '';
    }
}

module.exports = FilterListView;