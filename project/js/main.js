'use strict';

let Group = require('./model/Group.js'),
    Settings = require('./model/Settings.js'),
    App = require('./model/App.js'),
    Direction = require('./model/Direction.js'),
    Filter = require('./model/Filter.js'),
	Day = require('./model/Day.js'),
    Test = require('./model/Test.js'),
    Person = require('./model/Person.js'),

    GroupController = require('./controller/groupController.js'),
    SettingsController = require('./controller/settingsController.js'),
    TestListController = require('./controller/testListController.js'),
    FilterController = require('./controller/filterController.js'),
    PeopleController = require('./controller/peopleController.js'),

    EditGroupView = require('./view/editGroupView.js'),
    AddGroupView = require('./view/addGroupView.js'),
    SettingsView = require('./view/settingsView.js'),
    GroupListView = require('./view/groupListView.js'),
    GroupItemView = require('./view/groupItemView.js'),
    ExamItemView = require('./view/examItemView.js'),
    FilterItemView = require('./view/filterItemView.js'),
    FilterListView = require('./view/filterListView.js'),
    ContextMenuGroupView = require('./view/contextMenuGroupView.js'),
    ResultView = require('./view/resultView.js'),
    PeopleView = require('./view/peopleView.js'),
    PeopleAsignView = require('./view/asignPeopleView.js'),

    prefilledGroups = require('./prefilledGroups.js'),
    prefilledDirection = require('./prefilledDirection.js'),
    mediator = require('./Mediator.js'),
    tpl = require('./view/tpl/tplModalSettings.js');

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    let app = new App();
    app.groupList = prefilledGroups;
    app.settings.directionList = prefilledDirection;

    app.start();
}



module.exports = init;