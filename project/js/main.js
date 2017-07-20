'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let app = new App();

    lounchTestData(app.groupList, app.settings);
	app.start();
}

function lounchTestData (groupList, settings) {
    groupListTest.forEach((group) => groupList.push(group));
    directionListTest.forEach((direction) => settings.directionList.push(direction));
}