'use strict';

let Group = require('../project/js/model/Group.js'),
    Settings = require('../project/js/model/Settings.js'),
    App = require('../project/js/model/App.js'),
    Direction = require('../project/js/model/Direction.js'),
    Filter = require('../project/js/model/Filter.js'),
    Test = require('../project/js/model/Test.js'),
    GroupController = require('../project/js/controller/groupController.js'),
    SettingsController = require('../project/js/controller/settingsController.js'),
    AddGroupView = require('../project/js/view/AddGroupView.js'),
    SettingsView = require('../project/js/view/settingsView.js'),
    GroupListView = require('../project/js/view/groupListView.js'),
    GroupItemView = require('../project/js/view/groupListView.js'),
    prefilledGroups = require('../project/js/prefilledGroups.js'),
    prefilledDirection = require('../project/js/prefilledDirection.js'),
    mediator = require('../project/js/Mediator.js'),
    tpl = require('../project/js/view/tpl/tplModalSettings.js'),
    init = require('../project/js/main.js');


  