'use strict';

let Test = require('./Test.js'),
    Filter = require('./Filter.js'),
    Day= require('./Day.js');

class Direction {
    constructor (name) { 
        this.name = name;
        this.testList = [];
        this.filterList = [];
        this.day = [];
    }

    addTest (name, maxGrade) {
        this.testList.push(new Test(name, maxGrade));
    }

    addDay (date, time) {
        this.day.push(new Day(date, time));
    }

    addFilter (tests, action, condition, grade) {
        this.filterList.push(new Filter(tests, action, condition, grade));
    }
}

module.exports = Direction;