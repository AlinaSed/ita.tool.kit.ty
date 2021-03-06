'use strict';

let Settings = require('./Settings.js'),
    FilterListView = require('../view/filterListView.js'),
    GroupListView = require('../view/groupListView.js'),
    GroupController = require('../controller/groupController.js'),
    DayListController = require('../controller/dayListController.js'),
    SettingsController = require('../controller/settingsController.js'),
    TestListController = require('../controller/testListController.js'),
    FilterController = require('../controller/filterController.js'),
    TestListView = require('../view/testListView.js'),
    mediator = require('../Mediator.js'),
    ResultController = require('../controller/resultController.js');

class App {
    constructor() {
        this.groupList = [];
        this.settings = new Settings();
    }

    addGroup() {
        this.groupList.push(new Group());
    }

    start() {
        let groupListView = new GroupListView(this.settings),
            groupController = new GroupController(this.groupList, this.settings, groupListView),
            filterListView = new FilterListView(),
            filterController = new FilterController(),
            dayListController = new DayListController(),
            testListView = new TestListView(),
            testListController = new TestListController(testListView),
            settingsController = new SettingsController(this.settings),
            resultController = new ResultController();

        groupController.renderGroupList();
        this.activate();
    }

    activate() {
        mediator.sub('addSelectedGroup', (group) => {
            this.groupList.push(group);
        });
    }
}

module.exports = App;
