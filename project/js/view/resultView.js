'use strict';

class ResultView {
    constructor (results) {
        this.section = document.querySelector('#result-section');
        this.results = results;
        this.createTable();
    }

    createTable () {
        let table = '<table><tr><th>Name</th><th>Surname</th><th>Email</th>';

        this.results.forEach(function(person) {
            table += '<tr>';

            table += `<td>${person.name}</td>`;
            table += `<td>${person.surname}</td>`;
            table += `<td>${person.email}</td>`;
            
            table += '</tr>';   
        });

        table += '</table>'

        this.section.innerHTML = 
                                `<h4>People</h4>
                                    <div>${table}</div>`;
    }
}

module.exports = ResultView;