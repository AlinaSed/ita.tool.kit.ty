'use strict';

let tplSettings = require('./tpl/tpl.settings.js'),
    mediator = require('../Mediator.js');

class SettingsAddFilterView {
    constructor (direction) {
        this.direction = direction;
        this.modalContainer = document.querySelector('.modal-container');

        this.renderAddFilterModal(direction);
        this.activate();
    }

    renderAddFilterModal (direction) {
        console.log('renderAddFilterModal');
        this.modalContainer.innerHTML = tplSettings.addFilter(direction);
    }

    activate () {
        console.log('activate');
    }
}

module.exports = SettingsAddFilterView;