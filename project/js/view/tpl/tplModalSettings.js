'use strict';

let tpl = {};

tpl.modalSettings = `
        <div id="settings">
            <div class="direction-select"></div>
            
            <p><button class="show-test-list">Tests</button></p>
            <p><button class="show-filter-list">Filters</button></p>
            
            <div id="tests-filters-container"></div>

            <p><button class="close-button">Close</button></p>
        </div>
    `;


module.exports = tpl;

     /*   `
    <div id="settings" class="modalwin">
        <div id="direction-select"></div>
       
        <p><button class="show-test-list">Tests</button></p>
        <p><button class="show-filterList">Filters</button></p>
       
        <div class="tests-filters-container"></div>
    </div>
    `*/