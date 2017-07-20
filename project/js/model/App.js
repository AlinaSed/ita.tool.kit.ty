'use strict';

export class App {
    constructor () {
        this.groups = [];
        this.settings = new Settings();
    }

    addGroup () {
        this.groups.push(new Group());
    }

    start () {
    	return new GroupController(this.groups); //* name is correct ?
    }
}