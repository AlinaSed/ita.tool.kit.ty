'use strict';

class GroupItemView {
    constructor(group) {
        this.container = document.querySelector(this.selectors.groupContainer);
        this.currentGroup = group;
        this.currentSelectedGroup = this.selectors.groupItem + '.' + this.currentGroup.name;
    }

    get selectors() {
        return {
            groupContainer: '#group-container',
            groupItem: '.group-item',
            testListContainer: '#test-list'
        };
    }

    activate() {
        document.querySelector(this.currentSelectedGroup).addEventListener('click', this.selectGroupItem.bind(this));
    }

    render() {
        let template = `<div class="group-item ${this.currentGroup.name} col-xs-2 panel panel-primary">
        <div class="panel-heading">
        <h3 class="panel-title">${this.currentGroup.name} </h3>
        </div>
         <div class="panel-body">
             <a class="btn btn-primary btn-xs group-edit-exams">Edit exams</a>
            </div>
            </div>`;

        this.container.insertAdjacentHTML('afterBegin', template);

        this.activate();
    }

    selectGroupItem(event) {
        document.querySelector(this.selectors.testListContainer).innerHTML = '';
        mediator.pub('groupSelected', this.currentGroup);
    }
}

module.exports = GroupItemView;
