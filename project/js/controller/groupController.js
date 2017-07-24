'use strict';

let GroupItemView = require('../view/groupItemView.js'),
    AddGroupView = require('../view/addGroupView.js'),
    Group = require('../model/Group.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor(groups, settings, groupListView) {
        this.groupListView = groupListView;
        this.settings = settings;
        this.groups = groups;

        this.activate();
    }

    renderGroupList(groups) {
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
    }

    showAddGroupHandler() {
        let addGroupModalView = new AddGroupView(this.settings);

        addGroupModalView.show();
    }

    addNewGroupHandler(data) {
        let newGroup = new Group(data.groupdName, data.direction);

        this.addNewGroup(newGroup);
    }
}

module.exports = GroupController;