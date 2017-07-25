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

tpl.editGroupExamModal =
    `<div class="modal fade display in add-group-modal">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Group managment</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="usr">Select group:</label>
                                <input type="text" class="form-control" id="group-name">
                            </div>
                            <div class="dropdown">
                                <select class="form-control" id="direction-dropdown"></select>
                            </div>
                            <button id="save-group" type="submit" class="btn btn-default">Save</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="close-button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    `;

    tpl.addGroupModal =
    `<div class="modal fade display in add-group-modal">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Group managment</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="usr">Select group:</label>
                                <input type="text" class="form-control" id="group-name">
                            </div>
                            <div class="dropdown">
                                <select class="form-control direction-dropdown"></select>
                            </div>
                            <button type="submit" class="btn btn-default save-group-btn">Save</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default close-group-btn" >Close</button>
                    </div>
                </div>

            </div>
        </div>
    `;

    tpl.modalGroupListViev = () => {
    return `
    <div class="titleSection">Group</div>
    <div id="group-container">
      <i id="add-group" class="add-button fa fa-plus-circle" aria-hidden="true"></i>
    </div>
    <div class="config">
      <i id='config' class="config-button fa fa-cog" aria-hidden="true"></i>
    </div>
    `;
};

tpl.testListModal =
    `<div class="modal fade display in add-group-modal">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Group managment</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="usr">Select group:</label>
                                <input type="text" class="form-control" id="group-name">
                            </div>
                            <div class="dropdown">
                                <select class="form-control" id="direction-dropdown"></select>
                            </div>
                            <button id="save-group" type="submit" class="btn btn-default">Save</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="close-button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    `;

module.exports = tpl;