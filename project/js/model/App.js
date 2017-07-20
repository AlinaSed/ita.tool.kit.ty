'use strict';

class App {
    constructor () {
        this.groupList = [];
        this.settings = new Settings();
        
    }

    addGroup () {
        this.groupList.push(new Group(name, direction));
    }
}