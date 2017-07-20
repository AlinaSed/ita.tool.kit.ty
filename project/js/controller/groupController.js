'use strict';

class GroupController {
    render (groups) {
        this.groups = groups;
        this.showGpoup();
    }

    showGpoup () {
        this.groups.forEach((group) => {
            let view = new GroupView();

            view.render(group.name);
        });
    }
}