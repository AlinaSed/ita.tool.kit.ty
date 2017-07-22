'use strict';

let Group = require('../project/js/model/Group.js'),
    Settings = require('../project/js/model/Settings.js'),
    App = require('../project/js/model/App.js'),
    Direction = require('../project/js/model/Direction.js'),
    Filter = require('../project/js/model/Filter.js'),
    Test = require('../project/js/model/Test.js'),
    GroupController = require('../project/js/controller/groupController.js'),
    SettingsController = require('../project/js/controller/settingsController.js'),
    GroupView = require('../project/js/view/groupView.js'),
    SettingsView = require('../project/js/view/settingsView.js'),
    prefilledGroups = require('../project/js/testData.js'),
    prefilledDirection = require('../project/js/testData.js'),
    mediator = require('../project/js/Mediator.js'),
    init = require('../project/js/main.js');