'use strict';

class ResultView {
    constructor (results) {
        this.section = document.querySelector('#result-section');
        this.results = results;
        this.show();
    }

    show () {
        this.section.innerHTML = this.results[0].name;
    }
}

module.exports = ResultView;