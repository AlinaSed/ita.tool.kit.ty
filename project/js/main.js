'use strict';

let Group = require('./model/Group.js'),
    Settings = require('./model/Settings.js'),
    App = require('./model/App.js'),
    Direction = require('./model/Direction.js'),
    Filter = require('./model/Filter.js'),
    Test = require('./model/Test.js'),
    GroupController = require('./controller/groupController.js'),
    SettingsController = require('./controller/settingsController.js'),
    AddGroupView = require('./view/addGroupView.js'),
    SettingsView = require('./view/settingsView.js'),
    GroupListView = require('./view/groupListView.js'),
    GroupItemView = require('./view/groupItemView.js'),
    prefilledGroups = require('./prefilledGroups.js'),
    prefilledDirection = require('./prefilledDirection.js'),
    mediator = require('./Mediator.js'),
    tpl = require('./view/tpl/tplModalSettings.js');

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    let app = new App();
    activateApp(app);
    app.groupList = prefilledGroups;
    app.settings.directionList = prefilledDirection;

    app.start();
 }

function activateApp(app) {
    mediator.sub('addSelectedGroup', (group) => {
        app.groupList.push(group);
    });
}