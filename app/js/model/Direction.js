'use strict';

class Direction {
    constructor (name) {  // UI, Java...
        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    addTest (name) {
        this.testList.push(new Test(name));
    }

    addFilter (tests, action, condition) {
        this.filterList.push(new Filter(tests, action, condition));
    }
}