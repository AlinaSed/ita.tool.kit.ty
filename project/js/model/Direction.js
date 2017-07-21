'use strict';

class Direction {
    constructor (name) { 
        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    addTest (name, maxGrade, grade) {
        this.testList.push(new Test(name, maxGrade, grade));
    }

    addFilter (tests, action, condition, grade) {
        this.filterList.push(new Filter(tests, action, condition, grade));
    }
}
