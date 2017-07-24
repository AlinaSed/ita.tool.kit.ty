'use strict';

class Direction {
    constructor (name) { 
        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    addTest (name, maxGrade) {
        this.testList.push(new Test(name, maxGrade));
    }

    addFilter (tests, action, condition, grade) {
        this.filterList.push(new Filter(tests, action, condition, grade));
    }
}

module.exports = Direction;