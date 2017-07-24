'use strict';

let SettingsView = require('../view/settingsView.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settings = settings;
        
        this.activate();
    }

    activate () {
        mediator.sub('OpenSettings', () => this.showSettings());

    }

    showSettings () {
        let view = new SettingsView(this.settings);
    }
}


















  /*  getDirectionNames () {
    let names = [];
        
        this.direction.forEach((item) => {
            names.push[item.name];
        });
        return names;
    }

    getDirectionTests (name) {
    let result = [];
        
        this.direction.forEach((item) => {
            result = item.testList;
        });

        return result;
    }*/

module.exports = SettingsController;