'use strict';

let GroupItemView = require('../view/groupItemView.js'),
    EditGroupView = require('../view/editGroupView.js'),
    AddGroupView = require('../view/addGroupView.js'),
    GroupContextMenuView = require('../view/contextMenuGroupView.js'),
    Group = require('../model/Group.js'),
    mediator = require('../Mediator.js'),
    AddExamModalView = require('../view/addExamsModalView.js');

class GroupController {
    constructor(groups, settings, groupListView) {
        this.groupListView = groupListView;
        this.settings = settings;
        this.groups = groups;
        this.selectedGroup = null;
        this.activate();
    }

    renderGroupList(groups) {
        this.groupListView.clearContainer();
        this.groups.forEach((group) => {
            let view = new GroupItemView(group);
            view.render();
        });
    }

    addNewGroup(group) {
        let view = new GroupItemView(group);
        mediator.pub('addSelectedGroup', group);
        view.render();
    }

    activate() {
        mediator.sub('openAddGroupdDialog', this.showAddGroupHandler.bind(this));
        mediator.sub('saveGroup', this.addNewGroupHandler.bind(this));
        mediator.sub('deleteGroup', this.deleteGroupHandler.bind(this));
        mediator.sub('showGroupContextMenu', this.contextMenuHandler.bind(this));
        mediator.sub('groupSelected', this.selectGroupHandler.bind(this));
        mediator.sub('showEditGroup', this.showEditGroupHadnler.bind(this));
        mediator.sub('examModel:open', this.showEditExamModalHandler.bind(this));
        mediator.sub('examModal:added', this.addExamsHandler.bind(this));
    }

    deleteGroupHandler(group) {
        let index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
            this.renderGroupList(this.groups);
        }
    }

    selectGroupHandler(group) {
        this.selectedGroup = group;
    }

    showAddGroupHandler() {
        let addGroupModalView = new AddGroupView(this.settings);
        addGroupModalView.show();
    }

    addNewGroupHandler(group) {
        this.addNewGroup(group);
    }

    contextMenuHandler(group) {
        let contextMenuView = new GroupContextMenuView(group);
        contextMenuView.show();
    }

    showEditGroupHadnler(group) {
        let editGroupView = new EditGroupView(group);
        editGroupView.show();
    }

    showEditExamModalHandler(group) {
        let examsModalView = new AddExamModalView(group);
        examsModalView.show();
    }

    addExamsHandler (data) {
        data.group.addTests(data.addedTests);
    }; 
}

module.exports = GroupController;