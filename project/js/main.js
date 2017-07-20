'use strict';

import {App} from './model/App.js';
import {Direction} from './model/Direction.js';
import {Filter} from './model/Filter.js';
import {Test} from './model/Test.js';
import {Group} from './model/Group.js';
import {Settings} from './model/Settings.js';
import {GroupView} from './view/groupView.js';
import {SettingsView} from './view/settingsView.js';
import {GroupController} from './controller/groupController.js';
import {SettingsController} from './controller/settingsController.js';


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