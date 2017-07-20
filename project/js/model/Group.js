'use strict';

export class Group {
    constructor (name, direction) {
        this.name = name;
        this.direction = direction.name;
        this.testList = direction.testList;
        this.filterList = direction.filterList;
    }
}