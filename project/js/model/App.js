'use strict';

let Settings = require('./Settings.js'),
    FilterListView = require('../view/filterListView.js'),
    GroupListView = require('../view/groupListView.js'),
    GroupController = require('../controller/groupController.js'),
    SettingsController = require('../controller/settingsController.js'),
    TestListController = require('../controller/testListController.js'),
    FilterController = require('../controller/filterController.js'),
    mediator = require('../Mediator.js')

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
            filterListView = new FilterListView(),
            groupController = new GroupController(this.groupList, this.settings, groupListView),
            testListController = new TestListController(),
            settingsController = new SettingsController(this.settings),
            filterController = new FilterController();

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