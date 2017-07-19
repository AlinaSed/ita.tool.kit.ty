'use strict';

class Settings {
    constructor () {
       this.directionList = ['UI', 'Java', 'MQC', 'ATQC'];
       this.filterList = [];
        
    }

    addDirection (name) {
        this.directionList.push(name);
    }
}      



