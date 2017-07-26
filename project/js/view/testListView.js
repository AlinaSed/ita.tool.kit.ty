'use strict';

let tpl = require('./tpl/tplModalSettings.js'),
    mediator = require('../Mediator.js'),
    ExamItemView = require('../view/examItemView.js');

class TestListView {
    constructor () {
        this.selectedGroup = null;
        this.container = document.querySelector(this.selectors.container);
        this.template = tpl.testListView;
        this.itemContainer = document.querySelector(this.selectors.testSection);
        
        this.render();
    }

	 get selectors() {
        return {
            container: '#test-section',
            testSection: '#test-list'
        };
    }

    renderTest(group){
        this.selectedGroup = group;
      
       this.selectedGroup.testList.forEach((currentTest) => {
            let examView = new ExamItemView(currentTest);
            examView.render();
       });

        group.testAdded.attach(this.addNewExamHandler);
    }

    activate(){
         mediator.sub('groupSelected', this.selectGroupHandler.bind(this));
    }

    render () {
        this.container.innerHTML = this.template;
    }

    addNewExamHandler(tests){
        this.itemContainer.innerHTML = '';
        tests.testList.forEach((test) => {
            let view = new ExamItemView(test);
            view.render();
        });
    }
    
}

module.exports = TestListView;