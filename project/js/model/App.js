'use strict';

let Settings = require('./Settings.js'),
    FilterListView = require('../view/filterListView.js'),
    GroupListView = require('../view/groupListView.js'),
    PeopleView = require('../view/peopleView.js'),
    GroupController = require('../controller/groupController.js'),
    PeopleController = require('../controller/peopleController.js'),
    SettingsController = require('../controller/settingsController.js'),
    TestListController = require('../controller/testListController.js'),
    FilterController = require('../controller/filterController.js'),
    TestListView = require('../view/testListView.js'),
    mediator = require('../Mediator.js');

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
            testListView = new TestListView(),
            testListController = new TestListController(testListView),
            settingsController = new SettingsController(this.settings),
         
            peopleView = new PeopleView(),
            peopleController = new PeopleController();

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