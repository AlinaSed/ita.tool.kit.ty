'use strict';

document.addEventListener('DOMContentLoaded', init, false);

//global variable
let mediator = new Mediator();

function init() {
    let app = new App();

    app.groupList = prefilledGroups;
    app.settings.directionList = prefilledDirection;

    app.start();
}