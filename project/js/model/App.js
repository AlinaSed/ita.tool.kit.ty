'use strict';

export class App {
    constructor () {
        this.groupLst = [];
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