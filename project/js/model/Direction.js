'use strict';

class Direction {
    constructor (name) { 
        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    addTest (name) {
        this.testList.push(new Test(name));
    }

    addFilter (tests, action, condition, grade) {
        this.filterList.push(new Filter(tests, action, condition, grade));
    }
}