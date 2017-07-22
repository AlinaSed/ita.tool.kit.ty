'use strict';

let Direction = require('./model/Direction.js'),
    Group = require('./model/Group.js');

let prefilledDirection = [new Direction('php'), new Direction('go'), new Direction('js')];
let prefilledGroups = [
    new Group('Dp-120', prefilledDirection[0]),
    new Group('Dp-112', prefilledDirection[1]),
    new Group('Dp-117', prefilledDirection[2])
];

module.exports = prefilledDirection;
module.exports = prefilledGroups;