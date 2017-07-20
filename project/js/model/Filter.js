'use strict';

export class Filter {
    constructor (tests, action, condition, grade) {
        this.tests = tests;
        this.action = action;
        this.condition = condition;
        this.grade = grade;
    }
}