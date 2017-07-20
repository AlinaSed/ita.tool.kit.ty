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
    	return new GroupController(this.groupList); //* name is correct ?
    }
}