'use strict';

class TestListController {
    constructor() {
        this.activate();
    }

    activate() {
        mediator.sub('groupSelected', this.groupSelectedHandler);
    }

    groupSelectedHandler(group) {
        group.testList.forEach((currentTest) => {
            let examView = new ExamItemView(currentTest);
            examView.render();
        })
    }

}