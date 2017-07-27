'use strict';

let settingsModal =  `
        <div class="settings-main">
            <div class="direction-select"></div>
            
            <div class="t-btn"><img src="images/t.png" class="show-test-list"/></div>
            <div class="f-btn"><img src="images/f.png" class="show-filter-list"/></div>
            
            <div class="tests-filters-container direction-list"> </div>
            <div class="close-btn">
                <i class="fa fa-window-close close-button close-btn" aria-hidden="true"></i>
            </div>
        </div>
        <div class="settings-add-filter"> 

        </div>
`;

module.exports = settingsModal;