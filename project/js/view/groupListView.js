'use strict';

let mediator = require('../Mediator.js');

class GroupListView {
    constructor (settings) {
        this.addGroupButton = document.querySelector(this.selectors.addGroupButton);
        this.settings = settings;

        this.activate();
    }

    get selectors () {
        return {
            addGroupButton: '#add-group',
            config: '#config'         
        };
    }

    activate () {
        this.addGroupButton.addEventListener('click', () => {
            mediator.pub('openAddGroupdDialog');
        });

      document.querySelector(this.selectors.config).addEventListener('click', () => {
            mediator.pub('OpenSettings');
        }, false);  
    }
}

module.exports = GroupListView;

