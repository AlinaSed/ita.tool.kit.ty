'use strict';

class App {
    constructor () {
        this.groupList = [];
        this.settings = new Settings();
    }

    addGroup () {
        this.groupList.push(new Group());
    }

    start () {
        let groupController = new GroupController();
        groupController.render(this.groupList);
    }
}