'use strict';

let Group = require('../project/js/model/Group.js'),
    Settings = require('../project/js/model/Settings.js'),
    App = require('../project/js/model/App.js'),
    Direction = require('../project/js/model/Direction.js'),
    Filter = require('../project/js/model/Filter.js'),
    Test = require('../project/js/model/Test.js'),

    GroupController = require('../project/js/controller/groupController.js'),
    SettingsController = require('../project/js/controller/settingsController.js'),
    TestListController = require('../project/js/controller/testListController.js'),
    FilterController = require('../project/js/controller/filterController.js'),

    EditGroupView = require('../project/js/view/editGroupView.js'),
    AddGroupView = require('../project/js/view/addGroupView.js'),
    SettingsView = require('../project/js/view/settingsView.js'),
    GroupListView = require('../project/js/view/groupListView.js'),
    GroupItemView = require('../project/js/view/groupListView.js'),
    ExamItemView = require('../project/js/view/examItemView.js'),
    FilterItemView = require('../project/js/view/filterItemView.js'),
    FilterListView = require('../project/js/view/filterListView.js'),
    ContextMenuGroupView = require('../project/js/view/contextMenuGroupView.js'),
    AddExamModalView = ('../project/js/view/addExamsModalView.js'),

    prefilledGroups = require('../project/js/prefilledGroups.js'),
    prefilledDirection = require('../project/js/prefilledDirection.js'),
    mediator = require('../project/js/Mediator.js'),
    tpl = require('../project/js/view/tpl/tplModalSettings.js'),
    init = require('../project/js/main.js');