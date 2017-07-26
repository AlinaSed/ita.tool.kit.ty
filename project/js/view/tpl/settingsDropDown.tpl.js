'use strict';

let settingsDropDown = (directionList) => {
    let optionList = '';

    directionList.forEach((direction, i) => {
        optionList += `
            <option ${(i = 0) ? 'selected' : ''} value="${direction.name}">
                ${direction.name}
            </option>
        `;
    });

    return `
            <select class="settings-directions-select direction"> 
                ${optionList} 
                <option value="addDirection"> 
                    <i class="fa fa-plus-circle" aria-hidden="true"></i> 
                </option>   
            </select>
    `; 
};

module.exports = settingsDropDown;
