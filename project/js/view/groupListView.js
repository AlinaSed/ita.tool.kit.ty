'use strict';

let mediator = require('../Mediator.js'),
    tpl = require('./tpl/tplModalSettings.js');

class GroupListView {
    constructor (settings) {
        this.groupSection = document.querySelector(this.selectors.modalGroupListView);
        this.settings = settings;

        this.show();
    }

    get selectors () {
        return {
            modalGroupListView : '#group-section',
            addGroupButton: '#add-group',
            config: '#config'         
        };
    }

    activate () {
        let addGroupButton = document.querySelector(this.selectors.addGroupButton),
            config = document.querySelector(this.selectors.config);
            
        addGroupButton.addEventListener('click', () => {
            mediator.pub('openAddGroupdDialog');
        });

      config.addEventListener('click', () => {
            mediator.pub('OpenSettings');
        }, false);  
    }


    show () {
       let modalGroupListView =  tpl.modalGroupListViev();

       this.groupSection.innerHTML = modalGroupListView;
       this.activate();
    }
}

module.exports = GroupListView;