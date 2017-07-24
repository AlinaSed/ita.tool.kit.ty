'use strict';

let tpl = {};

tpl.modalSettings = () => {
    return `
        <div id="settings" class="modalwin">
            <div id="directionSelect"></div>
            <br>
            <button id="showTestList">Tests</button>
            <button id="showFilterList">Filters</button>
            <br>
            <div id="TestListOfDirection">Tests should be here</div>
            <br>
            <div id="FilterListOfDirection">Filter should be here</div>
        </div>      
    `;
};

module.exports = tpl;