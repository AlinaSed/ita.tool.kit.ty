'use strict';

export class GroupView {
	
	get selectors(){
        return { groupContainer : '#group-container'};
    }

    render (groupName) {
        let groupContainer = document.querySelector(this.selectors.groupContainer);
        groupContainer.insertAdjacentHTML('afterBegin', `<div>${groupName}</div>`);
    }
}