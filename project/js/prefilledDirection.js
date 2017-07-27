'use strict';

let Direction = require('./model/Direction.js');

let prefilledDirection = [new Direction('php'), new Direction('go'), new Direction('js')];

prefilledDirection[0].addTest('English 1', 100);
prefilledDirection[0].addTest('English 2', 100);
prefilledDirection[0].addTest('English 3', 100);
prefilledDirection[0].addTest('English 4', 100);
prefilledDirection[0].addTest('Tech PHP', 400);
prefilledDirection[0].addTest('Essay PHP verify', 600);

prefilledDirection[1].addTest('English 1', 100);
prefilledDirection[1].addTest('English 2', 100);
prefilledDirection[1].addTest('English 3', 100);
prefilledDirection[1].addTest('English 4', 100);
prefilledDirection[1].addTest('Tech Go', 400);
prefilledDirection[1].addTest('Essay Go verify', 600);

prefilledDirection[2].addTest('English 1', 100);
prefilledDirection[2].addTest('English 2', 100);
prefilledDirection[2].addTest('English 3', 100);
prefilledDirection[2].addTest('English 4', 100);
prefilledDirection[2].addTest('Tech UI', 400);
prefilledDirection[2].addTest('Essay JS verify', 600);

let testsForFilter1PHP = [
        prefilledDirection[0].testList[0],
        prefilledDirection[0].testList[1],
        prefilledDirection[0].testList[2],
        prefilledDirection[0].testList[3]
    ],
    testsForFilter2PHP = [
        prefilledDirection[0].testList[4]
    ],
    testsForFilter1Go = [
        prefilledDirection[1].testList[0],
        prefilledDirection[1].testList[1],
        prefilledDirection[1].testList[2],
        prefilledDirection[1].testList[3]
    ],
    testsForFilter2Go = [
        prefilledDirection[1].testList[4]
    ],
    testsForFilter1JS = [
        prefilledDirection[2].testList[0],
        prefilledDirection[2].testList[1],
        prefilledDirection[2].testList[2],
        prefilledDirection[2].testList[3]
    ],
    testsForFilter2JS = [
        prefilledDirection[2].testList[4]
    ];

prefilledDirection[0].addFilter(testsForFilter1PHP, 'AVG', '>', 60, 'English tests');
prefilledDirection[0].addFilter(testsForFilter2PHP, 'SUM', '>', 80, 'Technical tests');

prefilledDirection[1].addFilter(testsForFilter1Go, 'AVG', '>', 50, 'English tests');
prefilledDirection[1].addFilter(testsForFilter2Go, 'SUM', '>', 75, 'Technical tests');

prefilledDirection[2].addFilter(testsForFilter1JS, 'AVG', '>', 80, 'English tests');
prefilledDirection[2].addFilter(testsForFilter2JS, 'SUM', '>', 70, 'Technical tests');

module.exports = prefilledDirection;