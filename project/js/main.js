'use strict';

let Group = require('./model/Group.js'),
    Settings = require('./model/Settings.js'),
    App = require('./model/App.js'),
    Direction = require('./model/Direction.js'),
    Filter = require('./model/Filter.js'),
    Test = require('./model/Test.js'),
    GroupController = require('./controller/groupController.js'),
    SettingsController = require('./controller/settingsController.js'),
    GroupView = require('./view/groupView.js'),
    SettingsView = require('./view/settingsView.js'),
    prefilledGroups = require('./testData.js'),
    prefilledDirection = require('./testData.js'),
    mediator = require('./Mediator.js');

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    let app = new App();

    app.groupList = prefilledGroups;
    app.settings.directionList = prefilledDirection;

    app.start();
}

module.exports = init;