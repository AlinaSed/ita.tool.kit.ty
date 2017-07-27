'use strict';

let settingsTestsForFilter = (testList) => {
    let tpl = '';
   
    testList.forEach((test) => tpl += `<div>${test.name}</div>`);
    
    return `
        <div class="tests-for-filter wrapper-list">
            ${tpl}
        </div>
    `; 
};

module.exports = settingsTestsForFilter;