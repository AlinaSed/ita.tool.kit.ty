'use strict';

class Filter {
    constructor (tests, action, condition, grade) {
        this.tests = tests;
        this.action = action;
        this.condition = condition;
        this.grade = grade;
    }

    get name () {
        return `${this.action} ${this.condition} ${this.grade}`;
    }
}

module.exports = Filter;
