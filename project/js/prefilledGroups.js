'use strict';

let Group = require('./model/Group.js'),
	Test = require('./model/Test.js'),
    prefilledDirection = require('./prefilledDirection.js');

let prefilledGroups;

/*let testListPHP = [],
    testListGo = [],
    testListUI = [];

testListPHP.push(new Test('En1', 100));
testListPHP.push(new Test('En2', 100));
testListPHP.push(new Test('En3', 100));
testListPHP.push(new Test('En4', 100));
testListPHP.push(new Test('Tech PHP', 400));
testListPHP.push(new Test('Essay PHP', 600));

testListGo.push(new Test('En1', 100));
testListGo.push(new Test('En2', 100));
testListGo.push(new Test('En3', 100));
testListGo.push(new Test('En4', 100));
testListGo.push(new Test('Tech Go', 400));
testListGo.push(new Test('Essay Go', 600));

testListUI.push(new Test('En1', 100));
testListUI.push(new Test('En2', 100));
testListUI.push(new Test('En3', 100));
testListUI.push(new Test('En4', 100));
testListUI.push(new Test('Tech JS', 400));
testListUI.push(new Test('Essay JS', 600));*/

//prefilledDirection[0].testList = testListPHP;
prefilledDirection[0].filterList = ['Filter1 php', 'Filter2 php'];

//prefilledDirection[1].testList = testListGo;
prefilledDirection[1].filterList = ['Filter1 go', 'Filter2 go'];

//prefilledDirection[2].testList = testListUI;
prefilledDirection[2].filterList = ['Filter1 ui', 'Filter2 ui'];

prefilledGroups = [
    new Group('Dp-120', prefilledDirection[0]),
    new Group('Dp-112', prefilledDirection[1]),
    new Group('Dp-117', prefilledDirection[2])
];

module.exports = prefilledGroups;