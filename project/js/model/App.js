'use strict';

let Settings = require('./Settings.js'),
    GroupListView = require('../view/groupListView.js'),
    GroupController = require('../controller/groupController.js');

class App {
    constructor() {
        this.groupList = [];
        this.settings = new Settings();
    }

    addGroup() {
        this.groupList.push(new Group());
    }

    start() {
        let groupListView = new GroupListView(this.settings);
        let groupController = new GroupController(this.groupList, this.settings, groupListView);
    
        groupController.renderGroupList();
    }
}

module.exports = App;