'use strict';

let mediator = require('../Mediator.js'),
    tpl = require('./tpl/tplModalSettings.js');

class FilterItemView {
    constructor(filter) {
        this.container = document.querySelector(this.selectors.filterList);
        this.filter = filter;
    }

    get selectors() {
        return {
            filterList: '.filter-list',
            activeBtn: '.btn-toggle.active',
            rejectedBtn: '.btn-toggle.rejected'
        };
    }


    render() {
        let filterTitle = this.filter.tests.name + ' ' + this.filter.action.toString() + ' ' + this.filter.condition + ' ' + this.filter.grade + '%',
            filterItemTemplate = document.createElement('div');

        filterItemTemplate.innerHTML = tpl.filterItem.replace('{filterTitle}', filterTitle);
        this.activate(filterItemTemplate);
        this.container.appendChild(filterItemTemplate);
    }

    activate(template) {
        let activeBtn = template.querySelector(this.selectors.activeBtn),
            rejectedBtn = template.querySelector(this.selectors.rejectedBtn);

        activeBtn.addEventListener('click', () => {
            this.toogleSwithBtn(template, this.selectors.activeBtn);
        });

        rejectedBtn.addEventListener('click', () => {
            this.toogleSwithBtn(template, this.selectors.rejectedBtn);
        });
    }

    toogleSwithBtn(template, selector) {
        let btns = template.querySelectorAll(selector + ' .btn');

        btns.forEach((btn) => {
            btn.classList.toggle('active');
            btn.classList.toggle('btn-primary');
            btn.classList.toggle('btn-default');
        });
    }
}

module.exports = FilterItemView;