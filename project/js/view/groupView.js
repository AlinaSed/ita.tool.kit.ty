'use strict';

class GroupView {
    constructor(groupName) {
        this.groupName = groupName;
        this.container = document.querySelector(this.selectors.groupContainer);
    }

    get selectors() {
        return {
            groupContainer: '#group-container'
        };
    }

    render() {
        let template = `<div class="group-item"><div class="title">${this.groupName}</div><a class="btn btn-primary btn-xs group-edit-exams"> Edit exams </a></div>`;

        this.container.insertAdjacentHTML('afterBegin', template);
    }
}

module.exports = GroupView;
