'use strict';

let GroupView = require('../view/groupView.js'),
    Group = require('../model/Group.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor(groups, settings, groupListView) {
        this.groups = groups;
        this.settings = settings;
        this.groupListView = groupListView;
        this.activate();
    }

    renderGroupList(groups) {
        this.groups.forEach((group) => {
            let view = new GroupView(group.name);
            view.render();
        });
    }

    addNewGroup(group) {
        let view = new GroupView(group.name);
        view.render();
    }

    activate() {
        mediator.sub('openAddGroupdDialog', this.fillDiretionDropwDownHandler.bind(this));

        mediator.sub('saveGroup', (data) => {
            let newGroup = new Group(data.groupdName, data.direction);
            this.groups.push(newGroup);
            this.addNewGroup(newGroup);
        })
    }

    fillDiretionDropwDownHandler() {
        this.groupListView.fillDirectionDropDown();
    }
}

module.exports = GroupController;