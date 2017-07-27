'use strict';
class Group {
    constructor (name, direction, day) {
        this.name = name;
        this.direction = direction.name;
        this.testList = direction.testList;
        this.filterList = direction.filterList;
        this.day = day;
    }

}

module.exports = Group;
