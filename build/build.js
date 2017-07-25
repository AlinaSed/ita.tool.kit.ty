var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mediator = function () {
    function Mediator() {
        _classCallCheck(this, Mediator);

        this.channels = {};
    }

    _createClass(Mediator, [{
        key: 'pub',
        value: function pub(channel, data) {
            if (this.channels[channel]) {
                this.channels[channel].forEach(function (fn) {
                    return fn(data);
                });
            }
        }
    }, {
        key: 'sub',
        value: function sub(channel, fn) {
            if (!this.channels[channel]) {
                this.channels[channel] = [];
            }

            this.channels[channel].push(fn);
        }
    }]);

    return Mediator;
}();

var mediator = new Mediator();

module.exports = mediator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Group = function Group(name, direction) {
    _classCallCheck(this, Group);

    this.name = name;
    this.direction = direction.name;
    this.testList = direction.testList;
    this.filterList = direction.filterList;
};

module.exports = Group;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    tpl = __webpack_require__(4);

var GroupListView = function () {
    function GroupListView(settings) {
        _classCallCheck(this, GroupListView);

        this.groupSection = document.querySelector(this.selectors.modalGroupListView);
        this.settings = settings;

        this.show();
    }

    _createClass(GroupListView, [{
        key: 'activate',
        value: function activate() {
            var addGroupButton = document.querySelector(this.selectors.addGroupButton),
                config = document.querySelector(this.selectors.config);

            addGroupButton.addEventListener('click', function () {
                mediator.pub('openAddGroupdDialog');
            });

            config.addEventListener('click', function () {
                mediator.pub('OpenSettings');
            }, false);
        }
    }, {
        key: 'show',
        value: function show() {
            var modalGroupListView = tpl.modalGroupListViev();

            this.groupSection.innerHTML = modalGroupListView;
            this.activate();
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                modalGroupListView: '#group-section',
                addGroupButton: '#add-group',
                config: '#config'
            };
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
    function Settings() {
        _classCallCheck(this, Settings);

        this.directionList = [];
    }

    _createClass(Settings, [{
        key: 'addDirection',
        value: function addDirection() {
            this.directionList.push(new Direction(name));
        }
    }]);

    return Settings;
}();

module.exports = Settings;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tpl = {};

tpl.modalSettings = function () {
    return '\n        <div id="settings" class="modalwin">\n            <div id="directionSelect"></div>\n            <br>\n            <button id="showTestList">Tests</button>\n            <button id="showFilterList">Filters</button>\n            <br>\n            <div id="TestListOfDirection">Tests should be here</div>\n            <br>\n            <div id="FilterListOfDirection">Filter should be here</div>\n        </div>      \n    ';
};

tpl.editGroupExamModal = '<div class="modal fade display in add-group-modal">\n            <div class="modal-dialog">\n\n                <!-- Modal content-->\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Group managment</h4>\n                    </div>\n                    <div class="modal-body">\n                        <form>\n                            <div class="form-group">\n                                <label for="usr">Select group:</label>\n                                <input type="text" class="form-control" id="group-name">\n                            </div>\n                            <div class="dropdown">\n                                <select class="form-control" id="direction-dropdown"></select>\n                            </div>\n                            <button id="save-group" type="submit" class="btn btn-default">Save</button>\n                        </form>\n                    </div>\n                    <div class="modal-footer">\n                        <button type="button" id="close-button" class="btn btn-default" data-dismiss="modal">Close</button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    ';

tpl.addGroupModal = '<div class="modal fade display in add-group-modal">\n            <div class="modal-dialog">\n\n                <!-- Modal content-->\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Group managment</h4>\n                    </div>\n                    <div class="modal-body">\n                        <form>\n                            <div class="form-group">\n                                <label for="usr">Select group:</label>\n                                <input type="text" class="form-control" id="group-name">\n                            </div>\n                            <div class="dropdown">\n                                <select class="form-control direction-dropdown"></select>\n                            </div>\n                            <button type="submit" class="btn btn-default save-group-btn">Save</button>\n                        </form>\n                    </div>\n                    <div class="modal-footer">\n                        <button type="button" class="btn btn-default close-group-btn" >Close</button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    ';

tpl.modalGroupListViev = function () {
    return '\n    <div class="titleSection">Group</div>\n    <div id="group-container">\n      <i id="add-group" class="add-button fa fa-plus-circle" aria-hidden="true"></i>\n    </div>\n    <div class="config">\n      <i id=\'config\' class="config-button fa fa-cog" aria-hidden="true"></i>\n    </div>\n    ';
};

tpl.testListModal = '<div class="modal fade display in add-group-modal">\n            <div class="modal-dialog">\n\n                <!-- Modal content-->\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Group managment</h4>\n                    </div>\n                    <div class="modal-body">\n                        <form>\n                            <div class="form-group">\n                                <label for="usr">Select group:</label>\n                                <input type="text" class="form-control" id="group-name">\n                            </div>\n                            <div class="dropdown">\n                                <select class="form-control" id="direction-dropdown"></select>\n                            </div>\n                            <button id="save-group" type="submit" class="btn btn-default">Save</button>\n                        </form>\n                    </div>\n                    <div class="modal-footer">\n                        <button type="button" id="close-button" class="btn btn-default" data-dismiss="modal">Close</button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    ';

module.exports = tpl;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupItemView = __webpack_require__(14),
    AddGroupView = __webpack_require__(15),
    Group = __webpack_require__(1),
    mediator = __webpack_require__(0);

var GroupController = function () {
    function GroupController(groups, settings, groupListView) {
        _classCallCheck(this, GroupController);

        this.groupListView = groupListView;
        this.settings = settings;
        this.groups = groups;

        this.activate();
    }

    _createClass(GroupController, [{
        key: 'renderGroupList',
        value: function renderGroupList(groups) {
            this.groups.forEach(function (group) {
                var view = new GroupItemView(group);
                view.render();
            });
        }
    }, {
        key: 'addNewGroup',
        value: function addNewGroup(group) {
            var view = new GroupItemView(group);
            mediator.pub('addSelectedGroup', group);
            view.render();
        }
    }, {
        key: 'activate',
        value: function activate() {
            mediator.sub('openAddGroupdDialog', this.showAddGroupHandler.bind(this));
            mediator.sub('saveGroup', this.addNewGroupHandler.bind(this));
        }
    }, {
        key: 'showAddGroupHandler',
        value: function showAddGroupHandler() {
            var addGroupModalView = new AddGroupView(this.settings);

            addGroupModalView.show();
        }
    }, {
        key: 'addNewGroupHandler',
        value: function addNewGroupHandler(data) {
            var newGroup = new Group(data.groupdName, data.direction);

            this.addNewGroup(newGroup);
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = __webpack_require__(7),
    mediator = __webpack_require__(0);

var SettingsController = function () {
    function SettingsController(settings) {
        _classCallCheck(this, SettingsController);

        this.settings = settings;

        this.activate();
    }

    _createClass(SettingsController, [{
        key: 'activate',
        value: function activate() {
            var _this = this;

            mediator.sub('OpenSettings', function () {
                return _this.showSettings();
            });
        }
    }, {
        key: 'showSettings',
        value: function showSettings() {
            var view = new SettingsView(this.settings);

            //view.showSettingsWindow();
            //view.renderDirectionNames();
        }
    }]);

    return SettingsController;
}();

/*  getDirectionNames () {
  let names = [];
      
      this.direction.forEach((item) => {
          names.push[item.name];
      });
      return names;
  }
   getDirectionTests (name) {
  let result = [];
      
      this.direction.forEach((item) => {
          result = item.testList;
      });
       return result;
  }*/

module.exports = SettingsController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = function () {
    function SettingsView(settings) {
        _classCallCheck(this, SettingsView);

        this.settings = settings;
        this.testFilterSwitcher = 'T';

        this.showSettingsWindow();
        this.renderDirectionNames();
        this.activate();
    }

    _createClass(SettingsView, [{
        key: 'showSettingsWindow',
        value: function showSettingsWindow() {
            var darkLayer = document.createElement('div'),

            //modalContainer = document.querySelector('#modal-container');
            modalWin = document.querySelector('#settings');

            darkLayer.id = 'shadow'; //darkLayer.setAtribute('id') = 'shadow';
            document.body.appendChild(darkLayer);
            //modalContainer.innerHTML = tpl.modalSettings();
            //modalContainer.style.display = 'block'; 
            modalWin.style.display = 'block';

            darkLayer.addEventListener('click', function () {
                darkLayer.parentNode.removeChild(darkLayer);
                //modalContainer.style.display = 'none';
                modalWin.style.display = 'none';
                return false;
            }, false);
        }
    }, {
        key: 'renderDirectionNames',
        value: function renderDirectionNames() {
            var directionSelect = document.querySelector('#directionSelect'),
                optionList = '',
                tpl = '';

            //console.log(directionSelect);

            this.settings.directionList.forEach(function (direction, i) {
                optionList += '\n                <option ' + ((i = 0) ? 'selected' : '') + ' value="' + direction.name + '">\n                    ' + direction.name + '\n                </option>\n            ';
            });

            tpl = '\n            <select id="settings-directions-select" class="direction"> \n                ' + optionList + ' \n                <option value="addDirection"> Add direction </option>\n            </select>\n        ';

            directionSelect.innerHTML = tpl;
        }
    }, {
        key: 'activate',
        value: function activate() {
            var _this = this;

            var buttonTests = void 0,
                buttonFilters = void 0,
                elSelect = void 0;

            buttonTests = document.querySelector('#showTestList');
            buttonFilters = document.querySelector('#showFilterList');
            elSelect = document.querySelector('#settings-directions-select');

            elSelect.addEventListener('change', function () {
                var selectedDirectionName = void 0;

                selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;
                if (selectedDirectionName === 'addDirection') {} else {
                    _this.renderTestsOrFilters(selectedDirectionName);
                }
            }, false);

            buttonTests.addEventListener('click', function () {
                var elSelect = document.querySelector('#settings-directions-select'),
                    selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;

                _this.testFilterSwitcher = 'T';
                _this.renderTestsOrFilters(selectedDirectionName);
                //mediator.pub('showTestList', options);
            }, false);

            buttonFilters.addEventListener('click', function () {
                var elSelect = document.querySelector('#settings-directions-select'),
                    selectedDirectionName = elSelect.options[elSelect.selectedIndex].value;

                _this.testFilterSwitcher = 'F';
                _this.renderTestsOrFilters(selectedDirectionName);
                //mediator.pub('showFilterList', options);
            }, false);
        }
    }, {
        key: 'renderTestsOrFilters',
        value: function renderTestsOrFilters(directionName) {
            if (this.testFilterSwitcher === 'T') {
                this.renderTests(directionName);
            } else {
                this.renderFilters(directionName);
            }
        }
    }, {
        key: 'renderTests',
        value: function renderTests(directionName) {
            var listContainer = document.querySelector('#tests-filters-container'),

            //testListContainer = document.querySelector('#TestListOfDirection'),
            tpl = '<div>Tests<ul>',
                buttonAddTest = void 0,
                direction = void 0;

            direction = this.settings.directionList.find(function (direction) {
                return directionName === direction.name;
            });
            direction.testList.forEach(function (test) {
                return tpl += '<li>' + test.name + '</li>';
            });
            tpl += '</ul><button id="add-test"onclick="console.log(\'Add Test\')">Add test</button></div>';
            listContainer.innerHTML = tpl; //direction.filterList[0];

            // buttonAddTest = document.querySelector('#add-test');//document.createElement('button');
            //buttonAddTest.id = 'add-test';
            // listContainer.appendChild(buttonAddTest);
            //buttonAddTest.addEventListener('click', console.log('Add Test'), false);
        }
    }, {
        key: 'renderFilters',
        value: function renderFilters(directionName) {
            var listContainer = document.querySelector('#tests-filters-container'),

            //filterListContainer = document.querySelector('#FilterListOfDirection'),
            tpl = '<div>Filters<ul>',
                buttonAddFilter = void 0,
                direction = void 0;

            direction = this.settings.directionList.find(function (direction) {
                return directionName === direction.name;
            });
            direction.filterList.forEach(function (filter) {
                return tpl += '<li>' + filter + '</li>';
            });
            tpl += '</ul><button id="add-filter">Add filter</button></div>';
            listContainer.innerHTML = tpl; //direction.filterList[0];
            buttonAddFilter = document.querySelector('#add-filter');
            buttonAddFilter.addEventListener('click', console.log('add filter'), false); //preventDefault, stopPropagation
        }
    }]);

    return SettingsView;
}();

module.exports = SettingsView;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExamItemView = __webpack_require__(9),
    mediator = __webpack_require__(0);

var TestListController = function () {
    function TestListController() {
        _classCallCheck(this, TestListController);

        this.activate();
    }

    _createClass(TestListController, [{
        key: 'activate',
        value: function activate() {
            mediator.sub('groupSelected', this.groupSelectedHandler);
        }
    }, {
        key: 'groupSelectedHandler',
        value: function groupSelectedHandler(group) {
            group.testList.forEach(function (currentTest) {
                var examView = new ExamItemView(currentTest);
                examView.render();
            });
        }
    }]);

    return TestListController;
}();

module.exports = TestListController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var ExamItemView = function () {
    function ExamItemView(test) {
        _classCallCheck(this, ExamItemView);

        this.container = document.querySelector(this.selectors.testSection);
        this.test = test;
    }

    _createClass(ExamItemView, [{
        key: 'render',
        value: function render() {

            var template = '<div class="test-item col-xs-2 panel panel-primary">\n                        <div class="panel-heading">\n                            <h3 class="panel-title">' + this.test.name + ' </h3>\n                        </div>\n                        <div class="panel-body">\n                        </div>\n                        </div>';

            this.container.insertAdjacentHTML('afterBegin', template);
        }
    }, {
        key: 'selectGroupItem',
        value: function selectGroupItem() {
            mediator.pub('groupSelected', this.currentGroup);
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                testSection: '#test-list'
            };
        }
    }]);

    return ExamItemView;
}();

module.exports = ExamItemView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Direction = function () {
    function Direction(name) {
        _classCallCheck(this, Direction);

        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    _createClass(Direction, [{
        key: 'addTest',
        value: function addTest(name, maxGrade) {
            this.testList.push(new Test(name, maxGrade));
        }
    }, {
        key: 'addFilter',
        value: function addFilter(tests, action, condition, grade) {
            this.filterList.push(new Filter(tests, action, condition, grade));
        }
    }]);

    return Direction;
}();

module.exports = Direction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test(name, maxGrade) {
    _classCallCheck(this, Test);

    this.name = name;
    this.maxGrade = maxGrade;
};

module.exports = Test;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Direction = __webpack_require__(10);

var prefilledDirection = [new Direction('php'), new Direction('go'), new Direction('js')];

module.exports = prefilledDirection;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = __webpack_require__(3),
    GroupListView = __webpack_require__(2),
    GroupController = __webpack_require__(5),
    SettingsController = __webpack_require__(6),
    TestListController = __webpack_require__(8);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groupList = [];
        this.settings = new Settings();
    }

    _createClass(App, [{
        key: 'addGroup',
        value: function addGroup() {
            this.groupList.push(new Group());
        }
    }, {
        key: 'start',
        value: function start() {
            var groupListView = new GroupListView(this.settings),
                groupController = new GroupController(this.groupList, this.settings, groupListView),
                testListController = new TestListController(),
                settingsController = new SettingsController(this.settings);

            groupController.renderGroupList();
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var GroupItemView = function () {
    function GroupItemView(group) {
        _classCallCheck(this, GroupItemView);

        this.container = document.querySelector(this.selectors.groupContainer);
        this.currentGroup = group;
        this.currentSelectedGroup = this.selectors.groupItem + '.' + this.currentGroup.name;
    }

    _createClass(GroupItemView, [{
        key: 'activate',
        value: function activate() {
            document.querySelector(this.currentSelectedGroup).addEventListener('click', this.selectGroupItem.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var template = '<div class="group-item ' + this.currentGroup.name + ' col-xs-2 panel panel-primary">\n        <div class="panel-heading">\n        <h3 class="panel-title">' + this.currentGroup.name + ' </h3>\n        </div>\n         <div class="panel-body">\n             <a class="btn btn-primary btn-xs group-edit-exams">Edit exams</a>\n            </div>\n            </div>';

            this.container.insertAdjacentHTML('afterBegin', template);

            this.activate();
        }
    }, {
        key: 'selectGroupItem',
        value: function selectGroupItem(event) {
            document.querySelector(this.selectors.testListContainer).innerHTML = '';
            mediator.pub('groupSelected', this.currentGroup);
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                groupContainer: '#group-container',
                groupItem: '.group-item',
                testListContainer: '#test-list'
            };
        }
    }]);

    return GroupItemView;
}();

module.exports = GroupItemView;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use srtict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var AddGroupView = function () {
    function AddGroupView(settings) {
        _classCallCheck(this, AddGroupView);

        this.body = document.body;
        this.settings = settings;
    }

    _createClass(AddGroupView, [{
        key: 'show',
        value: function show() {
            this.addLayover();
            this.body.insertAdjacentHTML('beforeEnd', tpl.addGroupModal);
            this.body.classList.add('modal-open');
            this.fillDirectionDropDown();
            this.activate();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.diactivate();
            this.body.classList.remove("modal-open");
            document.querySelector(this.selectors.modalBackdrop).remove();
            document.querySelector(this.selectors.modal).remove();
        }
    }, {
        key: 'activate',
        value: function activate() {
            $(this.selectors.save).bind("click", this.saveGroup.bind(this));
            $(this.selectors.closeButton).bind("click", this.hide.bind(this));
        }
    }, {
        key: 'diactivate',
        value: function diactivate() {
            $(this.selectors.save).unbind("click");
            $(this.selectors.closeButton).unbind("click");
            this.clearModalInput();
        }
    }, {
        key: 'addLayover',
        value: function addLayover() {
            var modalBackdrop = '<div id="div" class="modal-backdrop fade in"></div>';
            this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
        }
    }, {
        key: 'saveGroup',
        value: function saveGroup(event) {
            event.preventDefault();

            var directionDropDown = document.querySelector(this.selectors.directionDropDown),
                directionValue = directionDropDown.options[directionDropDown.selectedIndex].text,
                groupNameValue = document.querySelector(this.selectors.groupNameInput).value,
                selectedDirection = this.settings.directionList.find(function (value) {
                return value.name === directionValue;
            });

            mediator.pub('saveGroup', {
                groupdName: groupNameValue,
                direction: selectedDirection
            });

            this.hide();
        }
    }, {
        key: 'validateInput',
        value: function validateInput() {}
    }, {
        key: 'fillDirectionDropDown',
        value: function fillDirectionDropDown() {
            var options = '',
                directionDropDown = document.querySelector(this.selectors.directionDropDown);

            this.settings.directionList.forEach(function (direction) {
                options += '<option>' + direction.name + '</option>';
            });
            directionDropDown.innerHTML = options;
        }
    }, {
        key: 'clearModalInput',
        value: function clearModalInput() {
            document.querySelector(this.selectors.directionDropDown).value = '';
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                closeButton: '.close-group-btn',
                save: '.save-group-btn',
                modal: '.add-group-modal',
                directionDropDown: '.add-group-modal .direction-dropdown',
                groupNameInput: '#group-name',
                modalBackdrop: '.modal-backdrop'
            };
        }
    }]);

    return AddGroupView;
}();

module.exports = AddGroupView;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function Filter(tests, action, condition, grade) {
    _classCallCheck(this, Filter);

    this.tests = tests;
    this.action = action;
    this.condition = condition;
    this.grade = grade;
};

module.exports = Filter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(1),
    Test = __webpack_require__(11),
    prefilledDirection = __webpack_require__(12);

var prefilledGroups = void 0;

var testListPHP = [],
    testListGo = [],
    testListUI = [];

testListPHP.push(new Test('En1', 100));
testListPHP.push(new Test('En2', 100));
testListPHP.push(new Test('En3', 100));
testListPHP.push(new Test('En4', 100));
testListPHP.push(new Test('Tech PHP', 400));
testListPHP.push(new Test('Essay PHP', 600));

testListGo.push(new Test('En1', 100));
testListGo.push(new Test('En2', 100));
testListGo.push(new Test('En3', 100));
testListGo.push(new Test('En4', 100));
testListGo.push(new Test('Tech Go', 400));
testListGo.push(new Test('Essay Go', 600));

testListUI.push(new Test('En1', 100));
testListUI.push(new Test('En2', 100));
testListUI.push(new Test('En3', 100));
testListUI.push(new Test('En4', 100));
testListUI.push(new Test('Tech JS', 400));
testListUI.push(new Test('Essay JS', 600));

prefilledDirection[0].testList = testListPHP;
prefilledDirection[0].filterList = ['Filter1 php', 'Filter2 php'];

prefilledDirection[1].testList = testListGo;
prefilledDirection[1].filterList = ['Filter1 go', 'Filter2 go'];

prefilledDirection[2].testList = testListUI;
prefilledDirection[2].filterList = ['Filter1 ui', 'Filter2 ui'];

prefilledGroups = [new Group('Dp-120', prefilledDirection[0]), new Group('Dp-112', prefilledDirection[1]), new Group('Dp-117', prefilledDirection[2])];

module.exports = prefilledGroups;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mediator = __webpack_require__(0);

function activateApp(app) {
    mediator.sub('addSelectedGroup', function (group) {
        app.groupList.push(group);
    });
}

module.exports = activateApp;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(1),
    Settings = __webpack_require__(3),
    App = __webpack_require__(13),
    Direction = __webpack_require__(10),
    Filter = __webpack_require__(16),
    Test = __webpack_require__(11),
    GroupController = __webpack_require__(5),
    SettingsController = __webpack_require__(6),
    AddGroupView = __webpack_require__(20),
    SettingsView = __webpack_require__(7),
    GroupListView = __webpack_require__(2),
    GroupItemView = __webpack_require__(2),
    prefilledGroups = __webpack_require__(17),
    prefilledDirection = __webpack_require__(12),
    mediator = __webpack_require__(0),
    tpl = __webpack_require__(4),
    init = __webpack_require__(21),
    activateApp = __webpack_require__(18),
    TestListController = __webpack_require__(8),
    ExamItemView = __webpack_require__(9);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use srtict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var AddGroupView = function () {
    function AddGroupView(settings) {
        _classCallCheck(this, AddGroupView);

        this.body = document.body;
        this.settings = settings;
    }

    _createClass(AddGroupView, [{
        key: 'show',
        value: function show() {
            this.addLayover();
            this.body.insertAdjacentHTML('beforeEnd', tpl.addGroupModal);
            this.body.classList.add('modal-open');
            this.fillDirectionDropDown();
            this.activate();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.diactivate();
            this.body.classList.remove("modal-open");
            document.querySelector(this.selectors.modalBackdrop).remove();
            document.querySelector(this.selectors.modal).remove();
        }
    }, {
        key: 'activate',
        value: function activate() {
            $(this.selectors.save).bind("click", this.saveGroup.bind(this));
            $(this.selectors.closeButton).bind("click", this.hide.bind(this));
        }
    }, {
        key: 'diactivate',
        value: function diactivate() {
            $(this.selectors.save).unbind("click");
            $(this.selectors.closeButton).unbind("click");
            this.clearModalInput();
        }
    }, {
        key: 'addLayover',
        value: function addLayover() {
            var modalBackdrop = '<div id="div" class="modal-backdrop fade in"></div>';
            this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
        }
    }, {
        key: 'saveGroup',
        value: function saveGroup(event) {
            event.preventDefault();

            var directionDropDown = document.querySelector(this.selectors.directionDropDown),
                directionValue = directionDropDown.options[directionDropDown.selectedIndex].text,
                groupNameValue = document.querySelector(this.selectors.groupNameInput).value,
                selectedDirection = this.settings.directionList.find(function (value) {
                return value.name === directionValue;
            });

            mediator.pub('saveGroup', {
                groupdName: groupNameValue,
                direction: selectedDirection
            });

            this.hide();
        }
    }, {
        key: 'validateInput',
        value: function validateInput() {}
    }, {
        key: 'fillDirectionDropDown',
        value: function fillDirectionDropDown() {
            var options = '',
                directionDropDown = document.querySelector(this.selectors.directionDropDown);

            this.settings.directionList.forEach(function (direction) {
                options += '<option>' + direction.name + '</option>';
            });
            directionDropDown.innerHTML = options;
        }
    }, {
        key: 'clearModalInput',
        value: function clearModalInput() {
            document.querySelector(this.selectors.directionDropDown).value = '';
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                closeButton: '.close-group-btn',
                save: '.save-group-btn',
                modal: '.add-group-modal',
                directionDropDown: '.add-group-modal .direction-dropdown',
                groupNameInput: '#group-name',
                modalBackdrop: '.modal-backdrop'
            };
        }
    }]);

    return AddGroupView;
}();

module.exports = AddGroupView;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(1),
    Settings = __webpack_require__(3),
    App = __webpack_require__(13),
    Direction = __webpack_require__(10),
    Filter = __webpack_require__(16),
    Test = __webpack_require__(11),
    GroupController = __webpack_require__(5),
    SettingsController = __webpack_require__(6),
    TestListController = __webpack_require__(8),
    AddGroupView = __webpack_require__(15),
    SettingsView = __webpack_require__(7),
    GroupListView = __webpack_require__(2),
    GroupItemView = __webpack_require__(14),
    ExamItemView = __webpack_require__(9),
    prefilledGroups = __webpack_require__(17),
    prefilledDirection = __webpack_require__(12),
    mediator = __webpack_require__(0),
    activateApp = __webpack_require__(18),
    tpl = __webpack_require__(4);

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    var app = new App();
    activateApp(app);
    app.groupList = prefilledGroups;
    app.settings.directionList = prefilledDirection;

    app.start();
}

module.exports = init;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjg3MTk2Mzg5ZmM1MzhlZDVlZTEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21vZGVsL0dyb3VwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdmlldy9ncm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbW9kZWwvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L3RwbC90cGxNb2RhbFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9jb250cm9sbGVyL3NldHRpbmdzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3ZpZXcvc2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvY29udHJvbGxlci90ZXN0TGlzdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L2V4YW1JdGVtVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21vZGVsL0RpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21vZGVsL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9wcmVmaWxsZWREaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L2dyb3VwSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L2FkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3ByZWZpbGxlZEdyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3ZpZXcvQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiR3JvdXAiLCJuYW1lIiwiZGlyZWN0aW9uIiwidGVzdExpc3QiLCJmaWx0ZXJMaXN0IiwicmVxdWlyZSIsInRwbCIsIkdyb3VwTGlzdFZpZXciLCJzZXR0aW5ncyIsImdyb3VwU2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9ycyIsIm1vZGFsR3JvdXBMaXN0VmlldyIsInNob3ciLCJhZGRHcm91cEJ1dHRvbiIsImNvbmZpZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJtb2RhbEdyb3VwTGlzdFZpZXYiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZSIsIlNldHRpbmdzIiwiZGlyZWN0aW9uTGlzdCIsIkRpcmVjdGlvbiIsIm1vZGFsU2V0dGluZ3MiLCJlZGl0R3JvdXBFeGFtTW9kYWwiLCJhZGRHcm91cE1vZGFsIiwidGVzdExpc3RNb2RhbCIsIkdyb3VwSXRlbVZpZXciLCJBZGRHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJncm91cExpc3RWaWV3IiwiZ3JvdXAiLCJ2aWV3IiwicmVuZGVyIiwic3ViIiwic2hvd0FkZEdyb3VwSGFuZGxlciIsImJpbmQiLCJhZGROZXdHcm91cEhhbmRsZXIiLCJhZGRHcm91cE1vZGFsVmlldyIsIm5ld0dyb3VwIiwiZ3JvdXBkTmFtZSIsImFkZE5ld0dyb3VwIiwiU2V0dGluZ3NWaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwic2hvd1NldHRpbmdzIiwidGVzdEZpbHRlclN3aXRjaGVyIiwic2hvd1NldHRpbmdzV2luZG93IiwicmVuZGVyRGlyZWN0aW9uTmFtZXMiLCJkYXJrTGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwibW9kYWxXaW4iLCJpZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRpcmVjdGlvblNlbGVjdCIsIm9wdGlvbkxpc3QiLCJpIiwiYnV0dG9uVGVzdHMiLCJidXR0b25GaWx0ZXJzIiwiZWxTZWxlY3QiLCJzZWxlY3RlZERpcmVjdGlvbk5hbWUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwicmVuZGVyVGVzdHNPckZpbHRlcnMiLCJkaXJlY3Rpb25OYW1lIiwicmVuZGVyVGVzdHMiLCJyZW5kZXJGaWx0ZXJzIiwibGlzdENvbnRhaW5lciIsImJ1dHRvbkFkZFRlc3QiLCJmaW5kIiwidGVzdCIsImJ1dHRvbkFkZEZpbHRlciIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJFeGFtSXRlbVZpZXciLCJUZXN0TGlzdENvbnRyb2xsZXIiLCJncm91cFNlbGVjdGVkSGFuZGxlciIsImN1cnJlbnRUZXN0IiwiZXhhbVZpZXciLCJjb250YWluZXIiLCJ0ZXN0U2VjdGlvbiIsInRlbXBsYXRlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3VycmVudEdyb3VwIiwibWF4R3JhZGUiLCJUZXN0IiwidGVzdHMiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIkZpbHRlciIsInByZWZpbGxlZERpcmVjdGlvbiIsIkFwcCIsImdyb3VwTGlzdCIsImdyb3VwQ29udHJvbGxlciIsInRlc3RMaXN0Q29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsInJlbmRlckdyb3VwTGlzdCIsImdyb3VwQ29udGFpbmVyIiwiY3VycmVudFNlbGVjdGVkR3JvdXAiLCJncm91cEl0ZW0iLCJzZWxlY3RHcm91cEl0ZW0iLCJldmVudCIsInRlc3RMaXN0Q29udGFpbmVyIiwiYWRkTGF5b3ZlciIsImNsYXNzTGlzdCIsImFkZCIsImZpbGxEaXJlY3Rpb25Ecm9wRG93biIsImRpYWN0aXZhdGUiLCJyZW1vdmUiLCJtb2RhbEJhY2tkcm9wIiwibW9kYWwiLCIkIiwic2F2ZSIsInNhdmVHcm91cCIsImNsb3NlQnV0dG9uIiwiaGlkZSIsInVuYmluZCIsImNsZWFyTW9kYWxJbnB1dCIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aW9uRHJvcERvd24iLCJkaXJlY3Rpb25WYWx1ZSIsInRleHQiLCJncm91cE5hbWVWYWx1ZSIsImdyb3VwTmFtZUlucHV0Iiwic2VsZWN0ZWREaXJlY3Rpb24iLCJwcmVmaWxsZWRHcm91cHMiLCJ0ZXN0TGlzdFBIUCIsInRlc3RMaXN0R28iLCJ0ZXN0TGlzdFVJIiwiYWN0aXZhdGVBcHAiLCJhcHAiLCJpbml0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVNDLEksRUFBTTtBQUNoQixnQkFBSSxLQUFLRixRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCRSxPQUF2QixDQUErQixVQUFDQyxFQUFEO0FBQUEsMkJBQVFBLEdBQUdGLElBQUgsQ0FBUjtBQUFBLGlCQUEvQjtBQUNIO0FBQ0o7Ozs0QkFFSUQsTyxFQUFTRyxFLEVBQUk7QUFDZCxnQkFBSSxDQUFDLEtBQUtKLFFBQUwsQ0FBY0MsT0FBZCxDQUFMLEVBQTZCO0FBQ3pCLHFCQUFLRCxRQUFMLENBQWNDLE9BQWQsSUFBeUIsRUFBekI7QUFDSDs7QUFFRCxpQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCSSxJQUF2QixDQUE0QkQsRUFBNUI7QUFDSDs7Ozs7O0FBR0wsSUFBSUUsV0FBVyxJQUFJUCxRQUFKLEVBQWY7O0FBRUFRLE9BQU9DLE9BQVAsR0FBaUJGLFFBQWpCLEM7Ozs7Ozs7QUN4QkE7Ozs7SUFFTUcsSyxHQUNGLGVBQWFDLElBQWIsRUFBbUJDLFNBQW5CLEVBQThCO0FBQUE7O0FBQzFCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFVBQVVELElBQTNCO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQkQsVUFBVUMsUUFBMUI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCRixVQUFVRSxVQUE1QjtBQUNILEM7O0FBR0xOLE9BQU9DLE9BQVAsR0FBaUJDLEtBQWpCLEM7Ozs7Ozs7QUNYQTs7Ozs7O0FBRUEsSUFBSUgsV0FBVyxtQkFBQVEsQ0FBUSxDQUFSLENBQWY7QUFBQSxJQUNJQyxNQUFNLG1CQUFBRCxDQUFRLENBQVIsQ0FEVjs7SUFHTUUsYTtBQUNGLDJCQUFhQyxRQUFiLEVBQXVCO0FBQUE7O0FBQ25CLGFBQUtDLFlBQUwsR0FBb0JDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlQyxrQkFBdEMsQ0FBcEI7QUFDQSxhQUFLTCxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxhQUFLTSxJQUFMO0FBQ0g7Ozs7bUNBVVc7QUFDUixnQkFBSUMsaUJBQWlCTCxTQUFTQyxhQUFULENBQXVCLEtBQUtDLFNBQUwsQ0FBZUcsY0FBdEMsQ0FBckI7QUFBQSxnQkFDSUMsU0FBU04sU0FBU0MsYUFBVCxDQUF1QixLQUFLQyxTQUFMLENBQWVJLE1BQXRDLENBRGI7O0FBR0FELDJCQUFlRSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0FBQzNDcEIseUJBQVNxQixHQUFULENBQWEscUJBQWI7QUFDSCxhQUZEOztBQUlGRixtQkFBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNqQ3BCLHlCQUFTcUIsR0FBVCxDQUFhLGNBQWI7QUFDSCxhQUZILEVBRUssS0FGTDtBQUdEOzs7K0JBR087QUFDTCxnQkFBSUwscUJBQXNCUCxJQUFJYSxrQkFBSixFQUExQjs7QUFFQSxpQkFBS1YsWUFBTCxDQUFrQlcsU0FBbEIsR0FBOEJQLGtCQUE5QjtBQUNBLGlCQUFLUSxRQUFMO0FBQ0Y7Ozs0QkEzQmdCO0FBQ2IsbUJBQU87QUFDSFIsb0NBQXFCLGdCQURsQjtBQUVIRSxnQ0FBZ0IsWUFGYjtBQUdIQyx3QkFBUTtBQUhMLGFBQVA7QUFLSDs7Ozs7O0FBd0JMbEIsT0FBT0MsT0FBUCxHQUFpQlEsYUFBakIsQzs7Ozs7OztBQzNDQTs7Ozs7O0lBRU1lLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDSDs7Ozt1Q0FFZTtBQUNaLGlCQUFLQSxhQUFMLENBQW1CM0IsSUFBbkIsQ0FBd0IsSUFBSTRCLFNBQUosQ0FBY3ZCLElBQWQsQ0FBeEI7QUFDSDs7Ozs7O0FBR0xILE9BQU9DLE9BQVAsR0FBaUJ1QixRQUFqQixDOzs7Ozs7O0FDWkE7O0FBRUEsSUFBSWhCLE1BQU0sRUFBVjs7QUFFQUEsSUFBSW1CLGFBQUosR0FBb0IsWUFBTTtBQUN0QjtBQVlILENBYkQ7O0FBZUFuQixJQUFJb0Isa0JBQUo7O0FBOEJJcEIsSUFBSXFCLGFBQUo7O0FBOEJBckIsSUFBSWEsa0JBQUosR0FBeUIsWUFBTTtBQUMvQjtBQVNILENBVkc7O0FBWUpiLElBQUlzQixhQUFKOztBQThCQTlCLE9BQU9DLE9BQVAsR0FBaUJPLEdBQWpCLEM7Ozs7Ozs7QUN6SEE7Ozs7OztBQUVBLElBQUl1QixnQkFBZ0IsbUJBQUF4QixDQUFRLEVBQVIsQ0FBcEI7QUFBQSxJQUNJeUIsZUFBZSxtQkFBQXpCLENBQVEsRUFBUixDQURuQjtBQUFBLElBRUlMLFFBQVEsbUJBQUFLLENBQVEsQ0FBUixDQUZaO0FBQUEsSUFHSVIsV0FBVyxtQkFBQVEsQ0FBUSxDQUFSLENBSGY7O0lBS00wQixlO0FBQ0YsNkJBQVlDLE1BQVosRUFBb0J4QixRQUFwQixFQUE4QnlCLGFBQTlCLEVBQTZDO0FBQUE7O0FBQ3pDLGFBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsYUFBS3pCLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsYUFBS3dCLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxhQUFLWCxRQUFMO0FBQ0g7Ozs7d0NBRWVXLE0sRUFBUTtBQUNwQixpQkFBS0EsTUFBTCxDQUFZdEMsT0FBWixDQUFvQixVQUFDd0MsS0FBRCxFQUFXO0FBQzNCLG9CQUFJQyxPQUFPLElBQUlOLGFBQUosQ0FBa0JLLEtBQWxCLENBQVg7QUFDQUMscUJBQUtDLE1BQUw7QUFDSCxhQUhEO0FBSUg7OztvQ0FFV0YsSyxFQUFPO0FBQ2YsZ0JBQUlDLE9BQU8sSUFBSU4sYUFBSixDQUFrQkssS0FBbEIsQ0FBWDtBQUNBckMscUJBQVNxQixHQUFULENBQWEsa0JBQWIsRUFBaUNnQixLQUFqQztBQUNBQyxpQkFBS0MsTUFBTDtBQUNIOzs7bUNBRVU7QUFDUHZDLHFCQUFTd0MsR0FBVCxDQUFhLHFCQUFiLEVBQW9DLEtBQUtDLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUFwQztBQUNBMUMscUJBQVN3QyxHQUFULENBQWEsV0FBYixFQUEwQixLQUFLRyxrQkFBTCxDQUF3QkQsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDSDs7OzhDQUVxQjtBQUNsQixnQkFBSUUsb0JBQW9CLElBQUlYLFlBQUosQ0FBaUIsS0FBS3RCLFFBQXRCLENBQXhCOztBQUVBaUMsOEJBQWtCM0IsSUFBbEI7QUFDSDs7OzJDQUVrQnJCLEksRUFBTTtBQUNyQixnQkFBSWlELFdBQVcsSUFBSTFDLEtBQUosQ0FBVVAsS0FBS2tELFVBQWYsRUFBMkJsRCxLQUFLUyxTQUFoQyxDQUFmOztBQUVBLGlCQUFLMEMsV0FBTCxDQUFpQkYsUUFBakI7QUFDSDs7Ozs7O0FBR0w1QyxPQUFPQyxPQUFQLEdBQWlCZ0MsZUFBakIsQzs7Ozs7OztBQy9DQTs7Ozs7O0FBRUEsSUFBSWMsZUFBZSxtQkFBQXhDLENBQVEsQ0FBUixDQUFuQjtBQUFBLElBQ0lSLFdBQVcsbUJBQUFRLENBQVEsQ0FBUixDQURmOztJQUdNeUMsa0I7QUFDRixnQ0FBYXRDLFFBQWIsRUFBdUI7QUFBQTs7QUFDbkIsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsYUFBS2EsUUFBTDtBQUNIOzs7O21DQUVXO0FBQUE7O0FBQ1J4QixxQkFBU3dDLEdBQVQsQ0FBYSxjQUFiLEVBQTZCO0FBQUEsdUJBQU0sTUFBS1UsWUFBTCxFQUFOO0FBQUEsYUFBN0I7QUFFSDs7O3VDQUVlO0FBQ1osZ0JBQUlaLE9BQU8sSUFBSVUsWUFBSixDQUFpQixLQUFLckMsUUFBdEIsQ0FBWDs7QUFFQTtBQUNBO0FBQ0g7Ozs7OztBQW9CSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkZWLE9BQU9DLE9BQVAsR0FBaUIrQyxrQkFBakIsQzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1ELFk7QUFDRiwwQkFBYXJDLFFBQWIsRUFBdUI7QUFBQTs7QUFDbkIsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxhQUFLd0Msa0JBQUwsR0FBMEIsR0FBMUI7O0FBRUEsYUFBS0Msa0JBQUw7QUFDQSxhQUFLQyxvQkFBTDtBQUNBLGFBQUs3QixRQUFMO0FBQ0g7Ozs7NkNBRXFCO0FBQ2xCLGdCQUFJOEIsWUFBWXpDLFNBQVMwQyxhQUFULENBQXVCLEtBQXZCLENBQWhCOztBQUNJO0FBQ0FDLHVCQUFXM0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUZmOztBQUlBd0Msc0JBQVVHLEVBQVYsR0FBZSxRQUFmLENBTGtCLENBS087QUFDekI1QyxxQkFBUzZDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7QUFDQTtBQUNBO0FBQ0FFLHFCQUFTSSxLQUFULENBQWVDLE9BQWYsR0FBeUIsT0FBekI7O0FBRUFQLHNCQUFVbEMsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN0Q2tDLDBCQUFVUSxVQUFWLENBQXFCQyxXQUFyQixDQUFpQ1QsU0FBakM7QUFDQTtBQUNBRSx5QkFBU0ksS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0EsdUJBQU8sS0FBUDtBQUNILGFBTEQsRUFLRyxLQUxIO0FBTUg7OzsrQ0FFdUI7QUFDcEIsZ0JBQUlHLGtCQUFrQm5ELFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCO0FBQUEsZ0JBQ0ltRCxhQUFhLEVBRGpCO0FBQUEsZ0JBRUl4RCxNQUFNLEVBRlY7O0FBSVI7O0FBRVEsaUJBQUtFLFFBQUwsQ0FBY2UsYUFBZCxDQUE0QjdCLE9BQTVCLENBQW9DLFVBQUNRLFNBQUQsRUFBWTZELENBQVosRUFBa0I7QUFDbERELDhEQUNjLENBQUNDLElBQUksQ0FBTCxJQUFVLFVBQVYsR0FBdUIsRUFEckMsaUJBQ2tEN0QsVUFBVUQsSUFENUQsZ0NBRVVDLFVBQVVELElBRnBCO0FBS0gsYUFORDs7QUFRQUssa0hBRVV3RCxVQUZWOztBQU9BRCw0QkFBZ0J6QyxTQUFoQixHQUE0QmQsR0FBNUI7QUFDSDs7O21DQUVXO0FBQUE7O0FBQ1IsZ0JBQUkwRCxvQkFBSjtBQUFBLGdCQUNJQyxzQkFESjtBQUFBLGdCQUVJQyxpQkFGSjs7QUFJQUYsMEJBQWN0RCxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWQ7QUFDQXNELDRCQUFnQnZELFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWhCO0FBQ0F1RCx1QkFBV3hELFNBQVNDLGFBQVQsQ0FBdUIsNkJBQXZCLENBQVg7O0FBRUF1RCxxQkFBU2pELGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDdEMsb0JBQUlrRCw4QkFBSjs7QUFFQUEsd0NBQXdCRCxTQUFTRSxPQUFULENBQWlCRixTQUFTRyxhQUExQixFQUF5Q0MsS0FBakU7QUFDQSxvQkFBSUgsMEJBQTBCLGNBQTlCLEVBQThDLENBRTdDLENBRkQsTUFFTztBQUNILDBCQUFLSSxvQkFBTCxDQUEwQkoscUJBQTFCO0FBQ0g7QUFDSixhQVRELEVBU0csS0FUSDs7QUFXQUgsd0JBQVkvQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQ3hDLG9CQUFJaUQsV0FBV3hELFNBQVNDLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWY7QUFBQSxvQkFDSXdELHdCQUF3QkQsU0FBU0UsT0FBVCxDQUFpQkYsU0FBU0csYUFBMUIsRUFBeUNDLEtBRHJFOztBQUdBLHNCQUFLdEIsa0JBQUwsR0FBMEIsR0FBMUI7QUFDQSxzQkFBS3VCLG9CQUFMLENBQTBCSixxQkFBMUI7QUFDQTtBQUNILGFBUEQsRUFPRyxLQVBIOztBQVNBRiwwQkFBY2hELGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDMUMsb0JBQUlpRCxXQUFXeEQsU0FBU0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBZjtBQUFBLG9CQUNJd0Qsd0JBQXdCRCxTQUFTRSxPQUFULENBQWlCRixTQUFTRyxhQUExQixFQUF5Q0MsS0FEckU7O0FBR0Esc0JBQUt0QixrQkFBTCxHQUEwQixHQUExQjtBQUNBLHNCQUFLdUIsb0JBQUwsQ0FBMEJKLHFCQUExQjtBQUNBO0FBQ0gsYUFQRCxFQU9HLEtBUEg7QUFRSDs7OzZDQUVxQkssYSxFQUFlO0FBQ2pDLGdCQUFJLEtBQUt4QixrQkFBTCxLQUE0QixHQUFoQyxFQUFxQztBQUNqQyxxQkFBS3lCLFdBQUwsQ0FBaUJELGFBQWpCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtFLGFBQUwsQ0FBbUJGLGFBQW5CO0FBQ0g7QUFDSjs7O29DQUVZQSxhLEVBQWU7QUFDeEIsZ0JBQUlHLGdCQUFnQmpFLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXBCOztBQUNJO0FBQ0FMLGtDQUZKO0FBQUEsZ0JBR0lzRSxzQkFISjtBQUFBLGdCQUlJMUUsa0JBSko7O0FBTUFBLHdCQUFZLEtBQUtNLFFBQUwsQ0FBY2UsYUFBZCxDQUE0QnNELElBQTVCLENBQWlDLFVBQUMzRSxTQUFEO0FBQUEsdUJBQWVzRSxrQkFBa0J0RSxVQUFVRCxJQUEzQztBQUFBLGFBQWpDLENBQVo7QUFDQUMsc0JBQVVDLFFBQVYsQ0FBbUJULE9BQW5CLENBQTJCLFVBQUNvRixJQUFEO0FBQUEsdUJBQVV4RSxnQkFBY3dFLEtBQUs3RSxJQUFuQixVQUFWO0FBQUEsYUFBM0I7QUFDQUs7QUFDQXFFLDBCQUFjdkQsU0FBZCxHQUEwQmQsR0FBMUIsQ0FWd0IsQ0FVUTs7QUFFakM7QUFDQztBQUNBO0FBQ0E7QUFDSDs7O3NDQUVja0UsYSxFQUFlO0FBQzFCLGdCQUFJRyxnQkFBZ0JqRSxTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUFwQjs7QUFDSTtBQUNBTCxvQ0FGSjtBQUFBLGdCQUdJeUUsd0JBSEo7QUFBQSxnQkFJSTdFLGtCQUpKOztBQU1BQSx3QkFBWSxLQUFLTSxRQUFMLENBQWNlLGFBQWQsQ0FBNEJzRCxJQUE1QixDQUFpQyxVQUFDM0UsU0FBRDtBQUFBLHVCQUFlc0Usa0JBQWtCdEUsVUFBVUQsSUFBM0M7QUFBQSxhQUFqQyxDQUFaO0FBQ0FDLHNCQUFVRSxVQUFWLENBQXFCVixPQUFyQixDQUE2QixVQUFDc0YsTUFBRDtBQUFBLHVCQUFZMUUsZ0JBQWMwRSxNQUFkLFVBQVo7QUFBQSxhQUE3QjtBQUNBMUU7QUFDQXFFLDBCQUFjdkQsU0FBZCxHQUEwQmQsR0FBMUIsQ0FWMEIsQ0FVTTtBQUNoQ3lFLDhCQUFrQnJFLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQW9FLDRCQUFnQjlELGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQ2dFLFFBQVFDLEdBQVIsQ0FBWSxZQUFaLENBQTFDLEVBQXFFLEtBQXJFLEVBWjBCLENBWW1EO0FBQ2hGOzs7Ozs7QUFHTHBGLE9BQU9DLE9BQVAsR0FBaUI4QyxZQUFqQixDOzs7Ozs7O0FDeklBOzs7Ozs7QUFFQSxJQUFJc0MsZUFBZSxtQkFBQTlFLENBQVEsQ0FBUixDQUFuQjtBQUFBLElBQ0lSLFdBQVcsbUJBQUFRLENBQVEsQ0FBUixDQURmOztJQUdNK0Usa0I7QUFDRixrQ0FBYztBQUFBOztBQUNWLGFBQUsvRCxRQUFMO0FBQ0g7Ozs7bUNBRVU7QUFDUHhCLHFCQUFTd0MsR0FBVCxDQUFhLGVBQWIsRUFBOEIsS0FBS2dELG9CQUFuQztBQUNIOzs7NkNBRW9CbkQsSyxFQUFPO0FBQ3hCQSxrQkFBTS9CLFFBQU4sQ0FBZVQsT0FBZixDQUF1QixVQUFDNEYsV0FBRCxFQUFpQjtBQUNwQyxvQkFBSUMsV0FBVyxJQUFJSixZQUFKLENBQWlCRyxXQUFqQixDQUFmO0FBQ0FDLHlCQUFTbkQsTUFBVDtBQUNILGFBSEQ7QUFJSDs7Ozs7O0FBSUx0QyxPQUFPQyxPQUFQLEdBQWlCcUYsa0JBQWpCLEM7Ozs7Ozs7QUN2QkE7Ozs7OztBQUVBLElBQUl2RixXQUFXLG1CQUFBUSxDQUFRLENBQVIsQ0FBZjs7SUFFTThFLFk7QUFDRiwwQkFBWUwsSUFBWixFQUFrQjtBQUFBOztBQUNkLGFBQUtVLFNBQUwsR0FBaUI5RSxTQUFTQyxhQUFULENBQXVCLEtBQUtDLFNBQUwsQ0FBZTZFLFdBQXRDLENBQWpCO0FBQ0EsYUFBS1gsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7aUNBU1E7O0FBRUwsZ0JBQUlZLCtLQUUwQyxLQUFLWixJQUFMLENBQVU3RSxJQUZwRCw2SkFBSjs7QUFRQSxpQkFBS3VGLFNBQUwsQ0FBZUcsa0JBQWYsQ0FBa0MsWUFBbEMsRUFBZ0RELFFBQWhEO0FBQ0g7OzswQ0FFaUI7QUFDZDdGLHFCQUFTcUIsR0FBVCxDQUFhLGVBQWIsRUFBOEIsS0FBSzBFLFlBQW5DO0FBQ0g7Ozs0QkF0QmU7QUFDWixtQkFBTztBQUNISCw2QkFBYTtBQURWLGFBQVA7QUFHSDs7Ozs7O0FBcUJMM0YsT0FBT0MsT0FBUCxHQUFpQm9GLFlBQWpCLEM7Ozs7Ozs7QUNuQ0E7Ozs7OztJQUVNM0QsUztBQUNGLHVCQUFhdkIsSUFBYixFQUFtQjtBQUFBOztBQUNmLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7Ozs7Z0NBRVFILEksRUFBTTRGLFEsRUFBVTtBQUNyQixpQkFBSzFGLFFBQUwsQ0FBY1AsSUFBZCxDQUFtQixJQUFJa0csSUFBSixDQUFTN0YsSUFBVCxFQUFlNEYsUUFBZixDQUFuQjtBQUNIOzs7a0NBRVVFLEssRUFBT0MsTSxFQUFRQyxTLEVBQVdDLEssRUFBTztBQUN4QyxpQkFBSzlGLFVBQUwsQ0FBZ0JSLElBQWhCLENBQXFCLElBQUl1RyxNQUFKLENBQVdKLEtBQVgsRUFBa0JDLE1BQWxCLEVBQTBCQyxTQUExQixFQUFxQ0MsS0FBckMsQ0FBckI7QUFDSDs7Ozs7O0FBR0xwRyxPQUFPQyxPQUFQLEdBQWlCeUIsU0FBakIsQzs7Ozs7OztBQ2xCQTs7OztJQUVNc0UsSSxHQUNGLGNBQWE3RixJQUFiLEVBQW1CNEYsUUFBbkIsRUFBNkI7QUFBQTs7QUFDekIsU0FBSzVGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUs0RixRQUFMLEdBQWdCQSxRQUFoQjtBQUNILEM7O0FBR0wvRixPQUFPQyxPQUFQLEdBQWlCK0YsSUFBakIsQzs7Ozs7OztBQ1RBOztBQUVBLElBQUl0RSxZQUFZLG1CQUFBbkIsQ0FBUSxFQUFSLENBQWhCOztBQUVBLElBQUkrRixxQkFBcUIsQ0FBQyxJQUFJNUUsU0FBSixDQUFjLEtBQWQsQ0FBRCxFQUF1QixJQUFJQSxTQUFKLENBQWMsSUFBZCxDQUF2QixFQUE0QyxJQUFJQSxTQUFKLENBQWMsSUFBZCxDQUE1QyxDQUF6Qjs7QUFFQTFCLE9BQU9DLE9BQVAsR0FBaUJxRyxrQkFBakIsQzs7Ozs7OztBQ05BOzs7Ozs7QUFFQSxJQUFJOUUsV0FBVyxtQkFBQWpCLENBQVEsQ0FBUixDQUFmO0FBQUEsSUFDSUUsZ0JBQWdCLG1CQUFBRixDQUFRLENBQVIsQ0FEcEI7QUFBQSxJQUVJMEIsa0JBQWtCLG1CQUFBMUIsQ0FBUSxDQUFSLENBRnRCO0FBQUEsSUFHSXlDLHFCQUFxQixtQkFBQXpDLENBQVEsQ0FBUixDQUh6QjtBQUFBLElBSUkrRSxxQkFBcUIsbUJBQUEvRSxDQUFRLENBQVIsQ0FKekI7O0lBTU1nRyxHO0FBQ0YsbUJBQWM7QUFBQTs7QUFDVixhQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsYUFBSzlGLFFBQUwsR0FBZ0IsSUFBSWMsUUFBSixFQUFoQjtBQUNIOzs7O21DQUVVO0FBQ1AsaUJBQUtnRixTQUFMLENBQWUxRyxJQUFmLENBQW9CLElBQUlJLEtBQUosRUFBcEI7QUFDSDs7O2dDQUVPO0FBQ0osZ0JBQUlpQyxnQkFBZ0IsSUFBSTFCLGFBQUosQ0FBa0IsS0FBS0MsUUFBdkIsQ0FBcEI7QUFBQSxnQkFDSStGLGtCQUFrQixJQUFJeEUsZUFBSixDQUFvQixLQUFLdUUsU0FBekIsRUFBb0MsS0FBSzlGLFFBQXpDLEVBQW1EeUIsYUFBbkQsQ0FEdEI7QUFBQSxnQkFFSXVFLHFCQUFxQixJQUFJcEIsa0JBQUosRUFGekI7QUFBQSxnQkFHSXFCLHFCQUFxQixJQUFJM0Qsa0JBQUosQ0FBdUIsS0FBS3RDLFFBQTVCLENBSHpCOztBQUtBK0YsNEJBQWdCRyxlQUFoQjtBQUNIOzs7Ozs7QUFHTDVHLE9BQU9DLE9BQVAsR0FBaUJzRyxHQUFqQixDOzs7Ozs7O0FDNUJBOzs7Ozs7QUFFQSxJQUFJeEcsV0FBVyxtQkFBQVEsQ0FBUSxDQUFSLENBQWY7O0lBRU13QixhO0FBQ0YsMkJBQVlLLEtBQVosRUFBbUI7QUFBQTs7QUFDZixhQUFLc0QsU0FBTCxHQUFpQjlFLFNBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlK0YsY0FBdEMsQ0FBakI7QUFDQSxhQUFLZixZQUFMLEdBQW9CMUQsS0FBcEI7QUFDQSxhQUFLMEUsb0JBQUwsR0FBNEIsS0FBS2hHLFNBQUwsQ0FBZWlHLFNBQWYsR0FBMkIsR0FBM0IsR0FBaUMsS0FBS2pCLFlBQUwsQ0FBa0IzRixJQUEvRTtBQUNIOzs7O21DQVVVO0FBQ1BTLHFCQUFTQyxhQUFULENBQXVCLEtBQUtpRyxvQkFBNUIsRUFBa0QzRixnQkFBbEQsQ0FBbUUsT0FBbkUsRUFBNEUsS0FBSzZGLGVBQUwsQ0FBcUJ2RSxJQUFyQixDQUEwQixJQUExQixDQUE1RTtBQUNIOzs7aUNBRVE7QUFDTCxnQkFBSW1ELHVDQUFxQyxLQUFLRSxZQUFMLENBQWtCM0YsSUFBdkQsOEdBRXNCLEtBQUsyRixZQUFMLENBQWtCM0YsSUFGeEMsc0xBQUo7O0FBU0EsaUJBQUt1RixTQUFMLENBQWVHLGtCQUFmLENBQWtDLFlBQWxDLEVBQWdERCxRQUFoRDs7QUFFQSxpQkFBS3JFLFFBQUw7QUFDSDs7O3dDQUVlMEYsSyxFQUFPO0FBQ25CckcscUJBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlb0csaUJBQXRDLEVBQXlENUYsU0FBekQsR0FBcUUsRUFBckU7QUFDQXZCLHFCQUFTcUIsR0FBVCxDQUFhLGVBQWIsRUFBOEIsS0FBSzBFLFlBQW5DO0FBQ0g7Ozs0QkE5QmU7QUFDWixtQkFBTztBQUNIZSxnQ0FBZ0Isa0JBRGI7QUFFSEUsMkJBQVcsYUFGUjtBQUdIRyxtQ0FBbUI7QUFIaEIsYUFBUDtBQUtIOzs7Ozs7QUEyQkxsSCxPQUFPQyxPQUFQLEdBQWlCOEIsYUFBakIsQzs7Ozs7Ozs7QUM1Q0E7Ozs7OztBQUNBLElBQUloQyxXQUFXLG1CQUFBUSxDQUFRLENBQVIsQ0FBZjs7SUFFTXlCLFk7QUFDRiwwQkFBWXRCLFFBQVosRUFBc0I7QUFBQTs7QUFFbEIsYUFBSytDLElBQUwsR0FBWTdDLFNBQVM2QyxJQUFyQjtBQUNBLGFBQUsvQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7OytCQWFNO0FBQ0gsaUJBQUt5RyxVQUFMO0FBQ0EsaUJBQUsxRCxJQUFMLENBQVVvQyxrQkFBVixDQUE2QixXQUE3QixFQUEwQ3JGLElBQUlxQixhQUE5QztBQUNBLGlCQUFLNEIsSUFBTCxDQUFVMkQsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsWUFBeEI7QUFDQSxpQkFBS0MscUJBQUw7QUFDQSxpQkFBSy9GLFFBQUw7QUFDSDs7OytCQUVNO0FBQ0gsaUJBQUtnRyxVQUFMO0FBQ0EsaUJBQUs5RCxJQUFMLENBQVUyRCxTQUFWLENBQW9CSSxNQUFwQixDQUEyQixZQUEzQjtBQUNBNUcscUJBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlMkcsYUFBdEMsRUFBcURELE1BQXJEO0FBQ0E1RyxxQkFBU0MsYUFBVCxDQUF1QixLQUFLQyxTQUFMLENBQWU0RyxLQUF0QyxFQUE2Q0YsTUFBN0M7QUFDSDs7O21DQUdVO0FBQ1BHLGNBQUUsS0FBSzdHLFNBQUwsQ0FBZThHLElBQWpCLEVBQXVCbkYsSUFBdkIsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBS29GLFNBQUwsQ0FBZXBGLElBQWYsQ0FBb0IsSUFBcEIsQ0FBckM7QUFDQWtGLGNBQUUsS0FBSzdHLFNBQUwsQ0FBZWdILFdBQWpCLEVBQThCckYsSUFBOUIsQ0FBbUMsT0FBbkMsRUFBNEMsS0FBS3NGLElBQUwsQ0FBVXRGLElBQVYsQ0FBZSxJQUFmLENBQTVDO0FBQ0g7OztxQ0FFWTtBQUNUa0YsY0FBRSxLQUFLN0csU0FBTCxDQUFlOEcsSUFBakIsRUFBdUJJLE1BQXZCLENBQThCLE9BQTlCO0FBQ0FMLGNBQUUsS0FBSzdHLFNBQUwsQ0FBZWdILFdBQWpCLEVBQThCRSxNQUE5QixDQUFxQyxPQUFyQztBQUNBLGlCQUFLQyxlQUFMO0FBQ0g7OztxQ0FFWTtBQUNULGdCQUFJUixxRUFBSjtBQUNBLGlCQUFLaEUsSUFBTCxDQUFVb0Msa0JBQVYsQ0FBNkIsV0FBN0IsRUFBMEM0QixhQUExQztBQUNIOzs7a0NBRVNSLEssRUFBTztBQUNiQSxrQkFBTWlCLGNBQU47O0FBRUEsZ0JBQUlDLG9CQUFvQnZILFNBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlcUgsaUJBQXRDLENBQXhCO0FBQUEsZ0JBQ0lDLGlCQUFpQkQsa0JBQWtCN0QsT0FBbEIsQ0FBMEI2RCxrQkFBa0I1RCxhQUE1QyxFQUEyRDhELElBRGhGO0FBQUEsZ0JBRUlDLGlCQUFpQjFILFNBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFleUgsY0FBdEMsRUFBc0QvRCxLQUYzRTtBQUFBLGdCQUdJZ0Usb0JBQW9CLEtBQUs5SCxRQUFMLENBQWNlLGFBQWQsQ0FBNEJzRCxJQUE1QixDQUFpQyxVQUFDUCxLQUFELEVBQVc7QUFDNUQsdUJBQU9BLE1BQU1yRSxJQUFOLEtBQWVpSSxjQUF0QjtBQUNILGFBRm1CLENBSHhCOztBQU9BckkscUJBQVNxQixHQUFULENBQWEsV0FBYixFQUEwQjtBQUN0QnlCLDRCQUFZeUYsY0FEVTtBQUV0QmxJLDJCQUFXb0k7QUFGVyxhQUExQjs7QUFLQSxpQkFBS1QsSUFBTDtBQUNIOzs7d0NBRWUsQ0FFZjs7O2dEQUV1QjtBQUNwQixnQkFBSXpELFVBQVUsRUFBZDtBQUFBLGdCQUNJNkQsb0JBQW9CdkgsU0FBU0MsYUFBVCxDQUF1QixLQUFLQyxTQUFMLENBQWVxSCxpQkFBdEMsQ0FEeEI7O0FBR0EsaUJBQUt6SCxRQUFMLENBQWNlLGFBQWQsQ0FBNEI3QixPQUE1QixDQUFvQyxVQUFDUSxTQUFELEVBQWU7QUFDL0NrRSx3Q0FBc0JsRSxVQUFVRCxJQUFoQztBQUNILGFBRkQ7QUFHQWdJLDhCQUFrQjdHLFNBQWxCLEdBQThCZ0QsT0FBOUI7QUFDSDs7OzBDQUVpQjtBQUNkMUQscUJBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlcUgsaUJBQXRDLEVBQXlEM0QsS0FBekQsR0FBaUUsRUFBakU7QUFDSDs7OzRCQTdFZTtBQUNaLG1CQUFPO0FBQ0hzRCw2QkFBYSxrQkFEVjtBQUVIRixzQkFBTSxpQkFGSDtBQUdIRix1QkFBTyxrQkFISjtBQUlIUyxtQ0FBbUIsc0NBSmhCO0FBS0hJLGdDQUFnQixhQUxiO0FBTUhkLCtCQUFlO0FBTlosYUFBUDtBQVFIOzs7Ozs7QUF1RUx6SCxPQUFPQyxPQUFQLEdBQWlCK0IsWUFBakIsQzs7Ozs7OztBQzFGQTs7OztJQUVNcUUsTSxHQUNGLGdCQUFhSixLQUFiLEVBQW9CQyxNQUFwQixFQUE0QkMsU0FBNUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQUE7O0FBQzFDLFNBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0gsQzs7QUFHTHBHLE9BQU9DLE9BQVAsR0FBaUJvRyxNQUFqQixDOzs7Ozs7O0FDWEE7O0FBRUEsSUFBSW5HLFFBQVEsbUJBQUFLLENBQVEsQ0FBUixDQUFaO0FBQUEsSUFDQ3lGLE9BQU8sbUJBQUF6RixDQUFRLEVBQVIsQ0FEUjtBQUFBLElBRUkrRixxQkFBcUIsbUJBQUEvRixDQUFRLEVBQVIsQ0FGekI7O0FBSUEsSUFBSWtJLHdCQUFKOztBQUVBLElBQUlDLGNBQWMsRUFBbEI7QUFBQSxJQUNJQyxhQUFhLEVBRGpCO0FBQUEsSUFFSUMsYUFBYSxFQUZqQjs7QUFJQUYsWUFBWTVJLElBQVosQ0FBaUIsSUFBSWtHLElBQUosQ0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQWpCO0FBQ0EwQyxZQUFZNUksSUFBWixDQUFpQixJQUFJa0csSUFBSixDQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBakI7QUFDQTBDLFlBQVk1SSxJQUFaLENBQWlCLElBQUlrRyxJQUFKLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFqQjtBQUNBMEMsWUFBWTVJLElBQVosQ0FBaUIsSUFBSWtHLElBQUosQ0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQWpCO0FBQ0EwQyxZQUFZNUksSUFBWixDQUFpQixJQUFJa0csSUFBSixDQUFTLFVBQVQsRUFBcUIsR0FBckIsQ0FBakI7QUFDQTBDLFlBQVk1SSxJQUFaLENBQWlCLElBQUlrRyxJQUFKLENBQVMsV0FBVCxFQUFzQixHQUF0QixDQUFqQjs7QUFFQTJDLFdBQVc3SSxJQUFYLENBQWdCLElBQUlrRyxJQUFKLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFoQjtBQUNBMkMsV0FBVzdJLElBQVgsQ0FBZ0IsSUFBSWtHLElBQUosQ0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQWhCO0FBQ0EyQyxXQUFXN0ksSUFBWCxDQUFnQixJQUFJa0csSUFBSixDQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBaEI7QUFDQTJDLFdBQVc3SSxJQUFYLENBQWdCLElBQUlrRyxJQUFKLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFoQjtBQUNBMkMsV0FBVzdJLElBQVgsQ0FBZ0IsSUFBSWtHLElBQUosQ0FBUyxTQUFULEVBQW9CLEdBQXBCLENBQWhCO0FBQ0EyQyxXQUFXN0ksSUFBWCxDQUFnQixJQUFJa0csSUFBSixDQUFTLFVBQVQsRUFBcUIsR0FBckIsQ0FBaEI7O0FBRUE0QyxXQUFXOUksSUFBWCxDQUFnQixJQUFJa0csSUFBSixDQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBaEI7QUFDQTRDLFdBQVc5SSxJQUFYLENBQWdCLElBQUlrRyxJQUFKLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFoQjtBQUNBNEMsV0FBVzlJLElBQVgsQ0FBZ0IsSUFBSWtHLElBQUosQ0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQWhCO0FBQ0E0QyxXQUFXOUksSUFBWCxDQUFnQixJQUFJa0csSUFBSixDQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBaEI7QUFDQTRDLFdBQVc5SSxJQUFYLENBQWdCLElBQUlrRyxJQUFKLENBQVMsU0FBVCxFQUFvQixHQUFwQixDQUFoQjtBQUNBNEMsV0FBVzlJLElBQVgsQ0FBZ0IsSUFBSWtHLElBQUosQ0FBUyxVQUFULEVBQXFCLEdBQXJCLENBQWhCOztBQUVBTSxtQkFBbUIsQ0FBbkIsRUFBc0JqRyxRQUF0QixHQUFpQ3FJLFdBQWpDO0FBQ0FwQyxtQkFBbUIsQ0FBbkIsRUFBc0JoRyxVQUF0QixHQUFtQyxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsQ0FBbkM7O0FBRUFnRyxtQkFBbUIsQ0FBbkIsRUFBc0JqRyxRQUF0QixHQUFpQ3NJLFVBQWpDO0FBQ0FyQyxtQkFBbUIsQ0FBbkIsRUFBc0JoRyxVQUF0QixHQUFtQyxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQW5DOztBQUVBZ0csbUJBQW1CLENBQW5CLEVBQXNCakcsUUFBdEIsR0FBaUN1SSxVQUFqQztBQUNBdEMsbUJBQW1CLENBQW5CLEVBQXNCaEcsVUFBdEIsR0FBbUMsQ0FBQyxZQUFELEVBQWUsWUFBZixDQUFuQzs7QUFFQW1JLGtCQUFrQixDQUNkLElBQUl2SSxLQUFKLENBQVUsUUFBVixFQUFvQm9HLG1CQUFtQixDQUFuQixDQUFwQixDQURjLEVBRWQsSUFBSXBHLEtBQUosQ0FBVSxRQUFWLEVBQW9Cb0csbUJBQW1CLENBQW5CLENBQXBCLENBRmMsRUFHZCxJQUFJcEcsS0FBSixDQUFVLFFBQVYsRUFBb0JvRyxtQkFBbUIsQ0FBbkIsQ0FBcEIsQ0FIYyxDQUFsQjs7QUFNQXRHLE9BQU9DLE9BQVAsR0FBaUJ3SSxlQUFqQixDOzs7Ozs7Ozs7QUNoREEsSUFBSTFJLFdBQVcsbUJBQUFRLENBQVEsQ0FBUixDQUFmOztBQUVBLFNBQVNzSSxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN0Qi9JLGFBQVN3QyxHQUFULENBQWEsa0JBQWIsRUFBaUMsVUFBQ0gsS0FBRCxFQUFXO0FBQ3hDMEcsWUFBSXRDLFNBQUosQ0FBYzFHLElBQWQsQ0FBbUJzQyxLQUFuQjtBQUNILEtBRkQ7QUFHSDs7QUFFRHBDLE9BQU9DLE9BQVAsR0FBaUI0SSxXQUFqQixDOzs7Ozs7O0FDUkE7O0FBRUEsSUFBSTNJLFFBQVEsbUJBQUFLLENBQVEsQ0FBUixDQUFaO0FBQUEsSUFDSWlCLFdBQVcsbUJBQUFqQixDQUFRLENBQVIsQ0FEZjtBQUFBLElBRUlnRyxNQUFNLG1CQUFBaEcsQ0FBUSxFQUFSLENBRlY7QUFBQSxJQUdJbUIsWUFBWSxtQkFBQW5CLENBQVEsRUFBUixDQUhoQjtBQUFBLElBSUk4RixTQUFTLG1CQUFBOUYsQ0FBUSxFQUFSLENBSmI7QUFBQSxJQUtJeUYsT0FBTyxtQkFBQXpGLENBQVEsRUFBUixDQUxYO0FBQUEsSUFNSTBCLGtCQUFrQixtQkFBQTFCLENBQVEsQ0FBUixDQU50QjtBQUFBLElBT0l5QyxxQkFBcUIsbUJBQUF6QyxDQUFRLENBQVIsQ0FQekI7QUFBQSxJQVFJeUIsZUFBZSxtQkFBQXpCLENBQVEsRUFBUixDQVJuQjtBQUFBLElBU0l3QyxlQUFlLG1CQUFBeEMsQ0FBUSxDQUFSLENBVG5CO0FBQUEsSUFVSUUsZ0JBQWdCLG1CQUFBRixDQUFRLENBQVIsQ0FWcEI7QUFBQSxJQVdJd0IsZ0JBQWdCLG1CQUFBeEIsQ0FBUSxDQUFSLENBWHBCO0FBQUEsSUFZSWtJLGtCQUFrQixtQkFBQWxJLENBQVEsRUFBUixDQVp0QjtBQUFBLElBYUkrRixxQkFBcUIsbUJBQUEvRixDQUFRLEVBQVIsQ0FiekI7QUFBQSxJQWNJUixXQUFXLG1CQUFBUSxDQUFRLENBQVIsQ0FkZjtBQUFBLElBZUlDLE1BQU0sbUJBQUFELENBQVEsQ0FBUixDQWZWO0FBQUEsSUFnQkl3SSxPQUFPLG1CQUFBeEksQ0FBUSxFQUFSLENBaEJYO0FBQUEsSUFpQklzSSxjQUFjLG1CQUFBdEksQ0FBUSxFQUFSLENBakJsQjtBQUFBLElBa0JJK0UscUJBQXFCLG1CQUFBL0UsQ0FBUSxDQUFSLENBbEJ6QjtBQUFBLElBbUJJOEUsZUFBZSxtQkFBQTlFLENBQVEsQ0FBUixDQW5CbkIsQzs7Ozs7Ozs7QUNGQTs7Ozs7O0FBQ0EsSUFBSVIsV0FBVyxtQkFBQVEsQ0FBUSxDQUFSLENBQWY7O0lBRU15QixZO0FBQ0YsMEJBQVl0QixRQUFaLEVBQXNCO0FBQUE7O0FBRWxCLGFBQUsrQyxJQUFMLEdBQVk3QyxTQUFTNkMsSUFBckI7QUFDQSxhQUFLL0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7OzsrQkFhTTtBQUNILGlCQUFLeUcsVUFBTDtBQUNBLGlCQUFLMUQsSUFBTCxDQUFVb0Msa0JBQVYsQ0FBNkIsV0FBN0IsRUFBMENyRixJQUFJcUIsYUFBOUM7QUFDQSxpQkFBSzRCLElBQUwsQ0FBVTJELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0EsaUJBQUtDLHFCQUFMO0FBQ0EsaUJBQUsvRixRQUFMO0FBQ0g7OzsrQkFFTTtBQUNILGlCQUFLZ0csVUFBTDtBQUNBLGlCQUFLOUQsSUFBTCxDQUFVMkQsU0FBVixDQUFvQkksTUFBcEIsQ0FBMkIsWUFBM0I7QUFDQTVHLHFCQUFTQyxhQUFULENBQXVCLEtBQUtDLFNBQUwsQ0FBZTJHLGFBQXRDLEVBQXFERCxNQUFyRDtBQUNBNUcscUJBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlNEcsS0FBdEMsRUFBNkNGLE1BQTdDO0FBQ0g7OzttQ0FHVTtBQUNQRyxjQUFFLEtBQUs3RyxTQUFMLENBQWU4RyxJQUFqQixFQUF1Qm5GLElBQXZCLENBQTRCLE9BQTVCLEVBQXFDLEtBQUtvRixTQUFMLENBQWVwRixJQUFmLENBQW9CLElBQXBCLENBQXJDO0FBQ0FrRixjQUFFLEtBQUs3RyxTQUFMLENBQWVnSCxXQUFqQixFQUE4QnJGLElBQTlCLENBQW1DLE9BQW5DLEVBQTRDLEtBQUtzRixJQUFMLENBQVV0RixJQUFWLENBQWUsSUFBZixDQUE1QztBQUNIOzs7cUNBRVk7QUFDVGtGLGNBQUUsS0FBSzdHLFNBQUwsQ0FBZThHLElBQWpCLEVBQXVCSSxNQUF2QixDQUE4QixPQUE5QjtBQUNBTCxjQUFFLEtBQUs3RyxTQUFMLENBQWVnSCxXQUFqQixFQUE4QkUsTUFBOUIsQ0FBcUMsT0FBckM7QUFDQSxpQkFBS0MsZUFBTDtBQUNIOzs7cUNBRVk7QUFDVCxnQkFBSVIscUVBQUo7QUFDQSxpQkFBS2hFLElBQUwsQ0FBVW9DLGtCQUFWLENBQTZCLFdBQTdCLEVBQTBDNEIsYUFBMUM7QUFDSDs7O2tDQUVTUixLLEVBQU87QUFDYkEsa0JBQU1pQixjQUFOOztBQUVBLGdCQUFJQyxvQkFBb0J2SCxTQUFTQyxhQUFULENBQXVCLEtBQUtDLFNBQUwsQ0FBZXFILGlCQUF0QyxDQUF4QjtBQUFBLGdCQUNJQyxpQkFBaUJELGtCQUFrQjdELE9BQWxCLENBQTBCNkQsa0JBQWtCNUQsYUFBNUMsRUFBMkQ4RCxJQURoRjtBQUFBLGdCQUVJQyxpQkFBaUIxSCxTQUFTQyxhQUFULENBQXVCLEtBQUtDLFNBQUwsQ0FBZXlILGNBQXRDLEVBQXNEL0QsS0FGM0U7QUFBQSxnQkFHSWdFLG9CQUFvQixLQUFLOUgsUUFBTCxDQUFjZSxhQUFkLENBQTRCc0QsSUFBNUIsQ0FBaUMsVUFBQ1AsS0FBRCxFQUFXO0FBQzVELHVCQUFPQSxNQUFNckUsSUFBTixLQUFlaUksY0FBdEI7QUFDSCxhQUZtQixDQUh4Qjs7QUFPQXJJLHFCQUFTcUIsR0FBVCxDQUFhLFdBQWIsRUFBMEI7QUFDdEJ5Qiw0QkFBWXlGLGNBRFU7QUFFdEJsSSwyQkFBV29JO0FBRlcsYUFBMUI7O0FBS0EsaUJBQUtULElBQUw7QUFDSDs7O3dDQUVlLENBRWY7OztnREFFdUI7QUFDcEIsZ0JBQUl6RCxVQUFVLEVBQWQ7QUFBQSxnQkFDSTZELG9CQUFvQnZILFNBQVNDLGFBQVQsQ0FBdUIsS0FBS0MsU0FBTCxDQUFlcUgsaUJBQXRDLENBRHhCOztBQUdBLGlCQUFLekgsUUFBTCxDQUFjZSxhQUFkLENBQTRCN0IsT0FBNUIsQ0FBb0MsVUFBQ1EsU0FBRCxFQUFlO0FBQy9Da0Usd0NBQXNCbEUsVUFBVUQsSUFBaEM7QUFDSCxhQUZEO0FBR0FnSSw4QkFBa0I3RyxTQUFsQixHQUE4QmdELE9BQTlCO0FBQ0g7OzswQ0FFaUI7QUFDZDFELHFCQUFTQyxhQUFULENBQXVCLEtBQUtDLFNBQUwsQ0FBZXFILGlCQUF0QyxFQUF5RDNELEtBQXpELEdBQWlFLEVBQWpFO0FBQ0g7Ozs0QkE3RWU7QUFDWixtQkFBTztBQUNIc0QsNkJBQWEsa0JBRFY7QUFFSEYsc0JBQU0saUJBRkg7QUFHSEYsdUJBQU8sa0JBSEo7QUFJSFMsbUNBQW1CLHNDQUpoQjtBQUtISSxnQ0FBZ0IsYUFMYjtBQU1IZCwrQkFBZTtBQU5aLGFBQVA7QUFRSDs7Ozs7O0FBdUVMekgsT0FBT0MsT0FBUCxHQUFpQitCLFlBQWpCLEM7Ozs7Ozs7QUMxRkE7O0FBRUEsSUFBSTlCLFFBQVEsbUJBQUFLLENBQVEsQ0FBUixDQUFaO0FBQUEsSUFDSWlCLFdBQVcsbUJBQUFqQixDQUFRLENBQVIsQ0FEZjtBQUFBLElBRUlnRyxNQUFNLG1CQUFBaEcsQ0FBUSxFQUFSLENBRlY7QUFBQSxJQUdJbUIsWUFBWSxtQkFBQW5CLENBQVEsRUFBUixDQUhoQjtBQUFBLElBSUk4RixTQUFTLG1CQUFBOUYsQ0FBUSxFQUFSLENBSmI7QUFBQSxJQUtJeUYsT0FBTyxtQkFBQXpGLENBQVEsRUFBUixDQUxYO0FBQUEsSUFNSTBCLGtCQUFrQixtQkFBQTFCLENBQVEsQ0FBUixDQU50QjtBQUFBLElBT0l5QyxxQkFBcUIsbUJBQUF6QyxDQUFRLENBQVIsQ0FQekI7QUFBQSxJQVFJK0UscUJBQXFCLG1CQUFBL0UsQ0FBUSxDQUFSLENBUnpCO0FBQUEsSUFTSXlCLGVBQWUsbUJBQUF6QixDQUFRLEVBQVIsQ0FUbkI7QUFBQSxJQVVJd0MsZUFBZSxtQkFBQXhDLENBQVEsQ0FBUixDQVZuQjtBQUFBLElBV0lFLGdCQUFnQixtQkFBQUYsQ0FBUSxDQUFSLENBWHBCO0FBQUEsSUFZSXdCLGdCQUFnQixtQkFBQXhCLENBQVEsRUFBUixDQVpwQjtBQUFBLElBYUk4RSxlQUFlLG1CQUFBOUUsQ0FBUSxDQUFSLENBYm5CO0FBQUEsSUFjSWtJLGtCQUFrQixtQkFBQWxJLENBQVEsRUFBUixDQWR0QjtBQUFBLElBZUkrRixxQkFBcUIsbUJBQUEvRixDQUFRLEVBQVIsQ0FmekI7QUFBQSxJQWdCSVIsV0FBVyxtQkFBQVEsQ0FBUSxDQUFSLENBaEJmO0FBQUEsSUFpQklzSSxjQUFjLG1CQUFBdEksQ0FBUSxFQUFSLENBakJsQjtBQUFBLElBa0JJQyxNQUFNLG1CQUFBRCxDQUFRLENBQVIsQ0FsQlY7O0FBb0JBSyxTQUFTTyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEM0SCxJQUE5QyxFQUFvRCxLQUFwRDs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ1osUUFBSUQsTUFBTSxJQUFJdkMsR0FBSixFQUFWO0FBQ0FzQyxnQkFBWUMsR0FBWjtBQUNBQSxRQUFJdEMsU0FBSixHQUFnQmlDLGVBQWhCO0FBQ0FLLFFBQUlwSSxRQUFKLENBQWFlLGFBQWIsR0FBNkI2RSxrQkFBN0I7O0FBRUF3QyxRQUFJRSxLQUFKO0FBQ0Y7O0FBSUZoSixPQUFPQyxPQUFQLEdBQWlCOEksSUFBakIsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyODcxOTYzODlmYzUzOGVkNWVlMSIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWVkaWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLm5hbWU7XG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBkaXJlY3Rpb24udGVzdExpc3Q7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IGRpcmVjdGlvbi5maWx0ZXJMaXN0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvR3JvdXAuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyksXG4gICAgdHBsID0gcmVxdWlyZSgnLi90cGwvdHBsTW9kYWxTZXR0aW5ncy5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5ncm91cFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLm1vZGFsR3JvdXBMaXN0Vmlldyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0b3JzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGFsR3JvdXBMaXN0VmlldyA6ICcjZ3JvdXAtc2VjdGlvbicsXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbjogJyNhZGQtZ3JvdXAnLFxuICAgICAgICAgICAgY29uZmlnOiAnI2NvbmZpZycgICAgICAgICBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWRkR3JvdXBCdXR0b24pLFxuICAgICAgICAgICAgY29uZmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5jb25maWcpO1xuICAgICAgICAgICAgXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdvcGVuQWRkR3JvdXBkRGlhbG9nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25maWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ09wZW5TZXR0aW5ncycpO1xuICAgICAgICB9LCBmYWxzZSk7ICBcbiAgICB9XG5cblxuICAgIHNob3cgKCkge1xuICAgICAgIGxldCBtb2RhbEdyb3VwTGlzdFZpZXcgPSAgdHBsLm1vZGFsR3JvdXBMaXN0VmlldigpO1xuXG4gICAgICAgdGhpcy5ncm91cFNlY3Rpb24uaW5uZXJIVE1MID0gbW9kYWxHcm91cExpc3RWaWV3O1xuICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvZ3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gW107ICBcbiAgICB9XG5cbiAgICBhZGREaXJlY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QucHVzaChuZXcgRGlyZWN0aW9uKG5hbWUpKTtcbiAgICB9XG59ICAgICBcblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvU2V0dGluZ3MuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCB0cGwgPSB7fTtcblxudHBsLm1vZGFsU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBpZD1cInNldHRpbmdzXCIgY2xhc3M9XCJtb2RhbHdpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImRpcmVjdGlvblNlbGVjdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNob3dUZXN0TGlzdFwiPlRlc3RzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2hvd0ZpbHRlckxpc3RcIj5GaWx0ZXJzPC9idXR0b24+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiVGVzdExpc3RPZkRpcmVjdGlvblwiPlRlc3RzIHNob3VsZCBiZSBoZXJlPC9kaXY+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiRmlsdGVyTGlzdE9mRGlyZWN0aW9uXCI+RmlsdGVyIHNob3VsZCBiZSBoZXJlPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgIFxuICAgIGA7XG59O1xuXG50cGwuZWRpdEdyb3VwRXhhbU1vZGFsID1cbiAgICBgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgZGlzcGxheSBpbiBhZGQtZ3JvdXAtbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cblxuICAgICAgICAgICAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+R3JvdXAgbWFuYWdtZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNyXCI+U2VsZWN0IGdyb3VwOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJncm91cC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImRpcmVjdGlvbi1kcm9wZG93blwiPjwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzYXZlLWdyb3VwXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZS1idXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdHBsLmFkZEdyb3VwTW9kYWwgPVxuICAgIGA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBkaXNwbGF5IGluIGFkZC1ncm91cC1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5Hcm91cCBtYW5hZ21lbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c3JcIj5TZWxlY3QgZ3JvdXA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImdyb3VwLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBkaXJlY3Rpb24tZHJvcGRvd25cIj48L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzYXZlLWdyb3VwLWJ0blwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGNsb3NlLWdyb3VwLWJ0blwiID5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICB0cGwubW9kYWxHcm91cExpc3RWaWV2ID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlU2VjdGlvblwiPkdyb3VwPC9kaXY+XG4gICAgPGRpdiBpZD1cImdyb3VwLWNvbnRhaW5lclwiPlxuICAgICAgPGkgaWQ9XCJhZGQtZ3JvdXBcIiBjbGFzcz1cImFkZC1idXR0b24gZmEgZmEtcGx1cy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgPGkgaWQ9J2NvbmZpZycgY2xhc3M9XCJjb25maWctYnV0dG9uIGZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICBgO1xufTtcblxudHBsLnRlc3RMaXN0TW9kYWwgPVxuICAgIGA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBkaXNwbGF5IGluIGFkZC1ncm91cC1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5Hcm91cCBtYW5hZ21lbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c3JcIj5TZWxlY3QgZ3JvdXA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImdyb3VwLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZGlyZWN0aW9uLWRyb3Bkb3duXCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNhdmUtZ3JvdXBcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsb3NlLWJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdmlldy90cGwvdHBsTW9kYWxTZXR0aW5ncy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwSXRlbVZpZXcgPSByZXF1aXJlKCcuLi92aWV3L2dyb3VwSXRlbVZpZXcuanMnKSxcbiAgICBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi92aWV3L2FkZEdyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwID0gcmVxdWlyZSgnLi4vbW9kZWwvR3JvdXAuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoZ3JvdXBzLCBzZXR0aW5ncywgZ3JvdXBMaXN0Vmlldykge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdFZpZXcgPSBncm91cExpc3RWaWV3O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cExpc3QoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldyA9IG5ldyBHcm91cEl0ZW1WaWV3KGdyb3VwKTtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZE5ld0dyb3VwKGdyb3VwKSB7XG4gICAgICAgIGxldCB2aWV3ID0gbmV3IEdyb3VwSXRlbVZpZXcoZ3JvdXApO1xuICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZFNlbGVjdGVkR3JvdXAnLCBncm91cCk7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignb3BlbkFkZEdyb3VwZERpYWxvZycsIHRoaXMuc2hvd0FkZEdyb3VwSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzYXZlR3JvdXAnLCB0aGlzLmFkZE5ld0dyb3VwSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzaG93QWRkR3JvdXBIYW5kbGVyKCkge1xuICAgICAgICBsZXQgYWRkR3JvdXBNb2RhbFZpZXcgPSBuZXcgQWRkR3JvdXBWaWV3KHRoaXMuc2V0dGluZ3MpO1xuXG4gICAgICAgIGFkZEdyb3VwTW9kYWxWaWV3LnNob3coKTtcbiAgICB9XG5cbiAgICBhZGROZXdHcm91cEhhbmRsZXIoZGF0YSkge1xuICAgICAgICBsZXQgbmV3R3JvdXAgPSBuZXcgR3JvdXAoZGF0YS5ncm91cGROYW1lLCBkYXRhLmRpcmVjdGlvbik7XG5cbiAgICAgICAgdGhpcy5hZGROZXdHcm91cChuZXdHcm91cCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvZ3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi4vdmlldy9zZXR0aW5nc1ZpZXcuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignT3BlblNldHRpbmdzJywgKCkgPT4gdGhpcy5zaG93U2V0dGluZ3MoKSk7XG5cbiAgICB9XG5cbiAgICBzaG93U2V0dGluZ3MgKCkge1xuICAgICAgICBsZXQgdmlldyA9IG5ldyBTZXR0aW5nc1ZpZXcodGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgLy92aWV3LnNob3dTZXR0aW5nc1dpbmRvdygpO1xuICAgICAgICAvL3ZpZXcucmVuZGVyRGlyZWN0aW9uTmFtZXMoKTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIC8qICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XG4gICAgbGV0IG5hbWVzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRpcmVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBuYW1lcy5wdXNoW2l0ZW0ubmFtZV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uVGVzdHMgKG5hbWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRpcmVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSBpdGVtLnRlc3RMaXN0O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvc2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yIChzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMudGVzdEZpbHRlclN3aXRjaGVyID0gJ1QnO1xuXG4gICAgICAgIHRoaXMuc2hvd1NldHRpbmdzV2luZG93KCk7XG4gICAgICAgIHRoaXMucmVuZGVyRGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHNob3dTZXR0aW5nc1dpbmRvdyAoKSB7XG4gICAgICAgIGxldCBkYXJrTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIC8vbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBtb2RhbFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncycpO1xuXG4gICAgICAgIGRhcmtMYXllci5pZCA9ICdzaGFkb3cnOyAvL2RhcmtMYXllci5zZXRBdHJpYnV0ZSgnaWQnKSA9ICdzaGFkb3cnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRhcmtMYXllcik7XG4gICAgICAgIC8vbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gdHBsLm1vZGFsU2V0dGluZ3MoKTtcbiAgICAgICAgLy9tb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgXG4gICAgICAgIG1vZGFsV2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGRhcmtMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRhcmtMYXllci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRhcmtMYXllcik7XG4gICAgICAgICAgICAvL21vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtb2RhbFdpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRGlyZWN0aW9uTmFtZXMgKCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpcmVjdGlvblNlbGVjdCcpLFxuICAgICAgICAgICAgb3B0aW9uTGlzdCA9ICcnLFxuICAgICAgICAgICAgdHBsID0gJyc7XG5cbi8vY29uc29sZS5sb2coZGlyZWN0aW9uU2VsZWN0KTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoZGlyZWN0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25MaXN0ICs9IGBcbiAgICAgICAgICAgICAgICA8b3B0aW9uICR7KGkgPSAwKSA/ICdzZWxlY3RlZCcgOiAnJ30gdmFsdWU9XCIke2RpcmVjdGlvbi5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAke2RpcmVjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdHBsID0gYFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNldHRpbmdzLWRpcmVjdGlvbnMtc2VsZWN0XCIgY2xhc3M9XCJkaXJlY3Rpb25cIj4gXG4gICAgICAgICAgICAgICAgJHtvcHRpb25MaXN0fSBcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRkRGlyZWN0aW9uXCI+IEFkZCBkaXJlY3Rpb24gPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgYDtcblxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuaW5uZXJIVE1MID0gdHBsO1xuICAgIH1cblxuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgICAgbGV0IGJ1dHRvblRlc3RzLCBcbiAgICAgICAgICAgIGJ1dHRvbkZpbHRlcnMsXG4gICAgICAgICAgICBlbFNlbGVjdDtcblxuICAgICAgICBidXR0b25UZXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93VGVzdExpc3QnKTtcbiAgICAgICAgYnV0dG9uRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93RmlsdGVyTGlzdCcpO1xuICAgICAgICBlbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1kaXJlY3Rpb25zLXNlbGVjdCcpO1xuXG4gICAgICAgIGVsU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERpcmVjdGlvbk5hbWU7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uTmFtZSA9IGVsU2VsZWN0Lm9wdGlvbnNbZWxTZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb25OYW1lID09PSAnYWRkRGlyZWN0aW9uJykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRlc3RzT3JGaWx0ZXJzKHNlbGVjdGVkRGlyZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBidXR0b25UZXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBlbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1kaXJlY3Rpb25zLXNlbGVjdCcpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uTmFtZSA9IGVsU2VsZWN0Lm9wdGlvbnNbZWxTZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGVzdEZpbHRlclN3aXRjaGVyID0gJ1QnO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUZXN0c09yRmlsdGVycyhzZWxlY3RlZERpcmVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgLy9tZWRpYXRvci5wdWIoJ3Nob3dUZXN0TGlzdCcsIG9wdGlvbnMpO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgYnV0dG9uRmlsdGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBlbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1kaXJlY3Rpb25zLXNlbGVjdCcpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uTmFtZSA9IGVsU2VsZWN0Lm9wdGlvbnNbZWxTZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMudGVzdEZpbHRlclN3aXRjaGVyID0gJ0YnO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUZXN0c09yRmlsdGVycyhzZWxlY3RlZERpcmVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgLy9tZWRpYXRvci5wdWIoJ3Nob3dGaWx0ZXJMaXN0Jywgb3B0aW9ucyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZXN0c09yRmlsdGVycyAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICBpZiAodGhpcy50ZXN0RmlsdGVyU3dpdGNoZXIgPT09ICdUJykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUZXN0cyhkaXJlY3Rpb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmlsdGVycyhkaXJlY3Rpb25OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclRlc3RzIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3RzLWZpbHRlcnMtY29udGFpbmVyJyksXG4gICAgICAgICAgICAvL3Rlc3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Rlc3RMaXN0T2ZEaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIHRwbCA9IGA8ZGl2PlRlc3RzPHVsPmAsXG4gICAgICAgICAgICBidXR0b25BZGRUZXN0LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uTGlzdC5maW5kKChkaXJlY3Rpb24pID0+IGRpcmVjdGlvbk5hbWUgPT09IGRpcmVjdGlvbi5uYW1lKTtcbiAgICAgICAgZGlyZWN0aW9uLnRlc3RMaXN0LmZvckVhY2goKHRlc3QpID0+IHRwbCArPSBgPGxpPiR7dGVzdC5uYW1lfTwvbGk+YCk7XG4gICAgICAgIHRwbCArPSBgPC91bD48YnV0dG9uIGlkPVwiYWRkLXRlc3RcIm9uY2xpY2s9XCJjb25zb2xlLmxvZygnQWRkIFRlc3QnKVwiPkFkZCB0ZXN0PC9idXR0b24+PC9kaXY+YDtcbiAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSB0cGw7ICAvL2RpcmVjdGlvbi5maWx0ZXJMaXN0WzBdO1xuXG4gICAgICAgLy8gYnV0dG9uQWRkVGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGVzdCcpOy8vZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIC8vYnV0dG9uQWRkVGVzdC5pZCA9ICdhZGQtdGVzdCc7XG4gICAgICAgIC8vIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkVGVzdCk7XG4gICAgICAgIC8vYnV0dG9uQWRkVGVzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnNvbGUubG9nKCdBZGQgVGVzdCcpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmlsdGVycyAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0cy1maWx0ZXJzLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgLy9maWx0ZXJMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0ZpbHRlckxpc3RPZkRpcmVjdGlvbicpLFxuICAgICAgICAgICAgdHBsID0gYDxkaXY+RmlsdGVyczx1bD5gLFxuICAgICAgICAgICAgYnV0dG9uQWRkRmlsdGVyLFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uTGlzdC5maW5kKChkaXJlY3Rpb24pID0+IGRpcmVjdGlvbk5hbWUgPT09IGRpcmVjdGlvbi5uYW1lKTtcbiAgICAgICAgZGlyZWN0aW9uLmZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB0cGwgKz0gYDxsaT4ke2ZpbHRlcn08L2xpPmApO1xuICAgICAgICB0cGwgKz0gYDwvdWw+PGJ1dHRvbiBpZD1cImFkZC1maWx0ZXJcIj5BZGQgZmlsdGVyPC9idXR0b24+PC9kaXY+YDtcbiAgICAgICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSB0cGw7ICAvL2RpcmVjdGlvbi5maWx0ZXJMaXN0WzBdO1xuICAgICAgICBidXR0b25BZGRGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWZpbHRlcicpO1xuICAgICAgICBidXR0b25BZGRGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25zb2xlLmxvZygnYWRkIGZpbHRlcicpLCBmYWxzZSk7IC8vcHJldmVudERlZmF1bHQsIHN0b3BQcm9wYWdhdGlvblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc1ZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvc2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgRXhhbUl0ZW1WaWV3ID0gcmVxdWlyZSgnLi4vdmlldy9leGFtSXRlbVZpZXcuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG4gICAgXG5jbGFzcyBUZXN0TGlzdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBTZWxlY3RlZCcsIHRoaXMuZ3JvdXBTZWxlY3RlZEhhbmRsZXIpO1xuICAgIH1cblxuICAgIGdyb3VwU2VsZWN0ZWRIYW5kbGVyKGdyb3VwKSB7XG4gICAgICAgIGdyb3VwLnRlc3RMaXN0LmZvckVhY2goKGN1cnJlbnRUZXN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhhbVZpZXcgPSBuZXcgRXhhbUl0ZW1WaWV3KGN1cnJlbnRUZXN0KTtcbiAgICAgICAgICAgIGV4YW1WaWV3LnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3RMaXN0Q29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvdGVzdExpc3RDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBFeGFtSXRlbVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHRlc3QpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRlc3RTZWN0aW9uKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0b3JzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGVzdFNlY3Rpb246ICcjdGVzdC1saXN0J1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwidGVzdC1pdGVtIGNvbC14cy0yIHBhbmVsIHBhbmVsLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGFuZWwtdGl0bGVcIj4ke3RoaXMudGVzdC5uYW1lfSA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBzZWxlY3RHcm91cEl0ZW0oKSB7XG4gICAgICAgIG1lZGlhdG9yLnB1YignZ3JvdXBTZWxlY3RlZCcsIHRoaXMuY3VycmVudEdyb3VwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbUl0ZW1WaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy92aWV3L2V4YW1JdGVtVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRGlyZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkgeyBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUZXN0IChuYW1lLCBtYXhHcmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QobmFtZSwgbWF4R3JhZGUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21vZGVsL0RpcmVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubWF4R3JhZGUgPSBtYXhHcmFkZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvVGVzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IERpcmVjdGlvbiA9IHJlcXVpcmUoJy4vbW9kZWwvRGlyZWN0aW9uLmpzJyk7XG5cbmxldCBwcmVmaWxsZWREaXJlY3Rpb24gPSBbbmV3IERpcmVjdGlvbigncGhwJyksIG5ldyBEaXJlY3Rpb24oJ2dvJyksIG5ldyBEaXJlY3Rpb24oJ2pzJyldO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWZpbGxlZERpcmVjdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ByZWZpbGxlZERpcmVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IFNldHRpbmdzID0gcmVxdWlyZSgnLi9TZXR0aW5ncy5qcycpLFxuICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi92aWV3L2dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVyL2dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXIvc2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgVGVzdExpc3RDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlci90ZXN0TGlzdENvbnRyb2xsZXIuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xuICAgIH1cblxuICAgIGFkZEdyb3VwKCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdC5wdXNoKG5ldyBHcm91cCgpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0Vmlldyh0aGlzLnNldHRpbmdzKSxcbiAgICAgICAgICAgIGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cExpc3QsIHRoaXMuc2V0dGluZ3MsIGdyb3VwTGlzdFZpZXcpLFxuICAgICAgICAgICAgdGVzdExpc3RDb250cm9sbGVyID0gbmV3IFRlc3RMaXN0Q29udHJvbGxlcigpLFxuICAgICAgICAgICAgc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLnNldHRpbmdzKTtcblxuICAgICAgICBncm91cENvbnRyb2xsZXIucmVuZGVyR3JvdXBMaXN0KCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cEl0ZW1WaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihncm91cCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZ3JvdXBDb250YWluZXIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZEdyb3VwID0gdGhpcy5zZWxlY3RvcnMuZ3JvdXBJdGVtICsgJy4nICsgdGhpcy5jdXJyZW50R3JvdXAubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0b3JzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBDb250YWluZXI6ICcjZ3JvdXAtY29udGFpbmVyJyxcbiAgICAgICAgICAgIGdyb3VwSXRlbTogJy5ncm91cC1pdGVtJyxcbiAgICAgICAgICAgIHRlc3RMaXN0Q29udGFpbmVyOiAnI3Rlc3QtbGlzdCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmN1cnJlbnRTZWxlY3RlZEdyb3VwKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VsZWN0R3JvdXBJdGVtLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJncm91cC1pdGVtICR7dGhpcy5jdXJyZW50R3JvdXAubmFtZX0gY29sLXhzLTIgcGFuZWwgcGFuZWwtcHJpbWFyeVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZVwiPiR7dGhpcy5jdXJyZW50R3JvdXAubmFtZX0gPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyBncm91cC1lZGl0LWV4YW1zXCI+RWRpdCBleGFtczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHNlbGVjdEdyb3VwSXRlbShldmVudCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnRlc3RMaXN0Q29udGFpbmVyKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbWVkaWF0b3IucHViKCdncm91cFNlbGVjdGVkJywgdGhpcy5jdXJyZW50R3JvdXApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cEl0ZW1WaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy92aWV3L2dyb3VwSXRlbVZpZXcuanMiLCIndXNlIHNydGljdCc7XG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBBZGRHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG5cbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RvcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbjogJy5jbG9zZS1ncm91cC1idG4nLFxuICAgICAgICAgICAgc2F2ZTogJy5zYXZlLWdyb3VwLWJ0bicsXG4gICAgICAgICAgICBtb2RhbDogJy5hZGQtZ3JvdXAtbW9kYWwnLFxuICAgICAgICAgICAgZGlyZWN0aW9uRHJvcERvd246ICcuYWRkLWdyb3VwLW1vZGFsIC5kaXJlY3Rpb24tZHJvcGRvd24nLFxuICAgICAgICAgICAgZ3JvdXBOYW1lSW5wdXQ6ICcjZ3JvdXAtbmFtZScsXG4gICAgICAgICAgICBtb2RhbEJhY2tkcm9wOiAnLm1vZGFsLWJhY2tkcm9wJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYWRkTGF5b3ZlcigpO1xuICAgICAgICB0aGlzLmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCB0cGwuYWRkR3JvdXBNb2RhbCk7XG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIHRoaXMuZmlsbERpcmVjdGlvbkRyb3BEb3duKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmRpYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLm1vZGFsQmFja2Ryb3ApLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLm1vZGFsKS5yZW1vdmUoKTtcbiAgICB9XG5cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLnNhdmUpLmJpbmQoXCJjbGlja1wiLCB0aGlzLnNhdmVHcm91cC5iaW5kKHRoaXMpKTtcbiAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5jbG9zZUJ1dHRvbikuYmluZChcImNsaWNrXCIsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkaWFjdGl2YXRlKCkge1xuICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLnNhdmUpLnVuYmluZChcImNsaWNrXCIpO1xuICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmNsb3NlQnV0dG9uKS51bmJpbmQoXCJjbGlja1wiKTtcbiAgICAgICAgdGhpcy5jbGVhck1vZGFsSW5wdXQoKTtcbiAgICB9XG5cbiAgICBhZGRMYXlvdmVyKCkge1xuICAgICAgICBsZXQgbW9kYWxCYWNrZHJvcCA9IGA8ZGl2IGlkPVwiZGl2XCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCBmYWRlIGluXCI+PC9kaXY+YDtcbiAgICAgICAgdGhpcy5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgbW9kYWxCYWNrZHJvcCk7XG4gICAgfVxuXG4gICAgc2F2ZUdyb3VwKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvbkRyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5kaXJlY3Rpb25Ecm9wRG93biksXG4gICAgICAgICAgICBkaXJlY3Rpb25WYWx1ZSA9IGRpcmVjdGlvbkRyb3BEb3duLm9wdGlvbnNbZGlyZWN0aW9uRHJvcERvd24uc2VsZWN0ZWRJbmRleF0udGV4dCxcbiAgICAgICAgICAgIGdyb3VwTmFtZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5ncm91cE5hbWVJbnB1dCkudmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uTGlzdC5maW5kKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5uYW1lID09PSBkaXJlY3Rpb25WYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnB1Yignc2F2ZUdyb3VwJywge1xuICAgICAgICAgICAgZ3JvdXBkTmFtZTogZ3JvdXBOYW1lVmFsdWUsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHNlbGVjdGVkRGlyZWN0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlSW5wdXQoKSB7XG5cbiAgICB9XG5cbiAgICBmaWxsRGlyZWN0aW9uRHJvcERvd24oKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gJycsXG4gICAgICAgICAgICBkaXJlY3Rpb25Ecm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZGlyZWN0aW9uRHJvcERvd24pO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtkaXJlY3Rpb24ubmFtZX08L29wdGlvbj5gO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aW9uRHJvcERvd24uaW5uZXJIVE1MID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjbGVhck1vZGFsSW5wdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZGlyZWN0aW9uRHJvcERvd24pLnZhbHVlID0gJyc7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvYWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvRmlsdGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXAgPSByZXF1aXJlKCcuL21vZGVsL0dyb3VwLmpzJyksXG5cdFRlc3QgPSByZXF1aXJlKCcuL21vZGVsL1Rlc3QuanMnKSxcbiAgICBwcmVmaWxsZWREaXJlY3Rpb24gPSByZXF1aXJlKCcuL3ByZWZpbGxlZERpcmVjdGlvbi5qcycpO1xuXG5sZXQgcHJlZmlsbGVkR3JvdXBzO1xuXG5sZXQgdGVzdExpc3RQSFAgPSBbXSxcbiAgICB0ZXN0TGlzdEdvID0gW10sXG4gICAgdGVzdExpc3RVSSA9IFtdO1xuXG50ZXN0TGlzdFBIUC5wdXNoKG5ldyBUZXN0KCdFbjEnLCAxMDApKTtcbnRlc3RMaXN0UEhQLnB1c2gobmV3IFRlc3QoJ0VuMicsIDEwMCkpO1xudGVzdExpc3RQSFAucHVzaChuZXcgVGVzdCgnRW4zJywgMTAwKSk7XG50ZXN0TGlzdFBIUC5wdXNoKG5ldyBUZXN0KCdFbjQnLCAxMDApKTtcbnRlc3RMaXN0UEhQLnB1c2gobmV3IFRlc3QoJ1RlY2ggUEhQJywgNDAwKSk7XG50ZXN0TGlzdFBIUC5wdXNoKG5ldyBUZXN0KCdFc3NheSBQSFAnLCA2MDApKTtcblxudGVzdExpc3RHby5wdXNoKG5ldyBUZXN0KCdFbjEnLCAxMDApKTtcbnRlc3RMaXN0R28ucHVzaChuZXcgVGVzdCgnRW4yJywgMTAwKSk7XG50ZXN0TGlzdEdvLnB1c2gobmV3IFRlc3QoJ0VuMycsIDEwMCkpO1xudGVzdExpc3RHby5wdXNoKG5ldyBUZXN0KCdFbjQnLCAxMDApKTtcbnRlc3RMaXN0R28ucHVzaChuZXcgVGVzdCgnVGVjaCBHbycsIDQwMCkpO1xudGVzdExpc3RHby5wdXNoKG5ldyBUZXN0KCdFc3NheSBHbycsIDYwMCkpO1xuXG50ZXN0TGlzdFVJLnB1c2gobmV3IFRlc3QoJ0VuMScsIDEwMCkpO1xudGVzdExpc3RVSS5wdXNoKG5ldyBUZXN0KCdFbjInLCAxMDApKTtcbnRlc3RMaXN0VUkucHVzaChuZXcgVGVzdCgnRW4zJywgMTAwKSk7XG50ZXN0TGlzdFVJLnB1c2gobmV3IFRlc3QoJ0VuNCcsIDEwMCkpO1xudGVzdExpc3RVSS5wdXNoKG5ldyBUZXN0KCdUZWNoIEpTJywgNDAwKSk7XG50ZXN0TGlzdFVJLnB1c2gobmV3IFRlc3QoJ0Vzc2F5IEpTJywgNjAwKSk7XG5cbnByZWZpbGxlZERpcmVjdGlvblswXS50ZXN0TGlzdCA9IHRlc3RMaXN0UEhQO1xucHJlZmlsbGVkRGlyZWN0aW9uWzBdLmZpbHRlckxpc3QgPSBbJ0ZpbHRlcjEgcGhwJywgJ0ZpbHRlcjIgcGhwJ107XG5cbnByZWZpbGxlZERpcmVjdGlvblsxXS50ZXN0TGlzdCA9IHRlc3RMaXN0R287XG5wcmVmaWxsZWREaXJlY3Rpb25bMV0uZmlsdGVyTGlzdCA9IFsnRmlsdGVyMSBnbycsICdGaWx0ZXIyIGdvJ107XG5cbnByZWZpbGxlZERpcmVjdGlvblsyXS50ZXN0TGlzdCA9IHRlc3RMaXN0VUk7XG5wcmVmaWxsZWREaXJlY3Rpb25bMl0uZmlsdGVyTGlzdCA9IFsnRmlsdGVyMSB1aScsICdGaWx0ZXIyIHVpJ107XG5cbnByZWZpbGxlZEdyb3VwcyA9IFtcbiAgICBuZXcgR3JvdXAoJ0RwLTEyMCcsIHByZWZpbGxlZERpcmVjdGlvblswXSksXG4gICAgbmV3IEdyb3VwKCdEcC0xMTInLCBwcmVmaWxsZWREaXJlY3Rpb25bMV0pLFxuICAgIG5ldyBHcm91cCgnRHAtMTE3JywgcHJlZmlsbGVkRGlyZWN0aW9uWzJdKVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaWxsZWRHcm91cHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9wcmVmaWxsZWRHcm91cHMuanMiLCJsZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQXBwKGFwcCkge1xuICAgIG1lZGlhdG9yLnN1YignYWRkU2VsZWN0ZWRHcm91cCcsIChncm91cCkgPT4ge1xuICAgICAgICBhcHAuZ3JvdXBMaXN0LnB1c2goZ3JvdXApO1xuICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFjdGl2YXRlQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvZXhhbXBsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9Hcm91cC5qcycpLFxuICAgIFNldHRpbmdzID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9TZXR0aW5ncy5qcycpLFxuICAgIEFwcCA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvbW9kZWwvQXBwLmpzJyksXG4gICAgRGlyZWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9EaXJlY3Rpb24uanMnKSxcbiAgICBGaWx0ZXIgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL21vZGVsL0ZpbHRlci5qcycpLFxuICAgIFRlc3QgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL21vZGVsL1Rlc3QuanMnKSxcbiAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvZ3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9jb250cm9sbGVyL3NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgIEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvdmlldy9BZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvc2V0dGluZ3NWaWV3LmpzJyksXG4gICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvdmlldy9ncm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBJdGVtVmlldyA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvdmlldy9ncm91cExpc3RWaWV3LmpzJyksXG4gICAgcHJlZmlsbGVkR3JvdXBzID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9wcmVmaWxsZWRHcm91cHMuanMnKSxcbiAgICBwcmVmaWxsZWREaXJlY3Rpb24gPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ByZWZpbGxlZERpcmVjdGlvbi5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9NZWRpYXRvci5qcycpLFxuICAgIHRwbCA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvdmlldy90cGwvdHBsTW9kYWxTZXR0aW5ncy5qcycpLFxuICAgIGluaXQgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL21haW4uanMnKSxcbiAgICBhY3RpdmF0ZUFwcCA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvZXhhbXBsZS5qcycpLFxuICAgIFRlc3RMaXN0Q29udHJvbGxlciA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvY29udHJvbGxlci90ZXN0TGlzdENvbnRyb2xsZXIuanMnKSxcbiAgICBFeGFtSXRlbVZpZXcgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvZXhhbUl0ZW1WaWV3LmpzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYnVpbGQvbWFpbi5qcyIsIid1c2Ugc3J0aWN0JztcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcblxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uOiAnLmNsb3NlLWdyb3VwLWJ0bicsXG4gICAgICAgICAgICBzYXZlOiAnLnNhdmUtZ3JvdXAtYnRuJyxcbiAgICAgICAgICAgIG1vZGFsOiAnLmFkZC1ncm91cC1tb2RhbCcsXG4gICAgICAgICAgICBkaXJlY3Rpb25Ecm9wRG93bjogJy5hZGQtZ3JvdXAtbW9kYWwgLmRpcmVjdGlvbi1kcm9wZG93bicsXG4gICAgICAgICAgICBncm91cE5hbWVJbnB1dDogJyNncm91cC1uYW1lJyxcbiAgICAgICAgICAgIG1vZGFsQmFja2Ryb3A6ICcubW9kYWwtYmFja2Ryb3AnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5hZGRMYXlvdmVyKCk7XG4gICAgICAgIHRoaXMuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHRwbC5hZGRHcm91cE1vZGFsKTtcbiAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgdGhpcy5maWxsRGlyZWN0aW9uRHJvcERvd24oKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZGlhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMubW9kYWxCYWNrZHJvcCkucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMubW9kYWwpLnJlbW92ZSgpO1xuICAgIH1cblxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgICQodGhpcy5zZWxlY3RvcnMuc2F2ZSkuYmluZChcImNsaWNrXCIsIHRoaXMuc2F2ZUdyb3VwLmJpbmQodGhpcykpO1xuICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmNsb3NlQnV0dG9uKS5iaW5kKFwiY2xpY2tcIiwgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGRpYWN0aXZhdGUoKSB7XG4gICAgICAgICQodGhpcy5zZWxlY3RvcnMuc2F2ZSkudW5iaW5kKFwiY2xpY2tcIik7XG4gICAgICAgICQodGhpcy5zZWxlY3RvcnMuY2xvc2VCdXR0b24pLnVuYmluZChcImNsaWNrXCIpO1xuICAgICAgICB0aGlzLmNsZWFyTW9kYWxJbnB1dCgpO1xuICAgIH1cblxuICAgIGFkZExheW92ZXIoKSB7XG4gICAgICAgIGxldCBtb2RhbEJhY2tkcm9wID0gYDxkaXYgaWQ9XCJkaXZcIiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wIGZhZGUgaW5cIj48L2Rpdj5gO1xuICAgICAgICB0aGlzLmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBtb2RhbEJhY2tkcm9wKTtcbiAgICB9XG5cbiAgICBzYXZlR3JvdXAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgZGlyZWN0aW9uRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmRpcmVjdGlvbkRyb3BEb3duKSxcbiAgICAgICAgICAgIGRpcmVjdGlvblZhbHVlID0gZGlyZWN0aW9uRHJvcERvd24ub3B0aW9uc1tkaXJlY3Rpb25Ecm9wRG93bi5zZWxlY3RlZEluZGV4XS50ZXh0LFxuICAgICAgICAgICAgZ3JvdXBOYW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmdyb3VwTmFtZUlucHV0KS52YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZpbmQoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm5hbWUgPT09IGRpcmVjdGlvblZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3IucHViKCdzYXZlR3JvdXAnLCB7XG4gICAgICAgICAgICBncm91cGROYW1lOiBncm91cE5hbWVWYWx1ZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWREaXJlY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVJbnB1dCgpIHtcblxuICAgIH1cblxuICAgIGZpbGxEaXJlY3Rpb25Ecm9wRG93bigpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSAnJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbkRyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5kaXJlY3Rpb25Ecm9wRG93bik7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2RpcmVjdGlvbi5uYW1lfTwvb3B0aW9uPmA7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3Rpb25Ecm9wRG93bi5pbm5lckhUTUwgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIGNsZWFyTW9kYWxJbnB1dCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5kaXJlY3Rpb25Ecm9wRG93bikudmFsdWUgPSAnJztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdmlldy9BZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cCA9IHJlcXVpcmUoJy4vbW9kZWwvR3JvdXAuanMnKSxcbiAgICBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vbW9kZWwvU2V0dGluZ3MuanMnKSxcbiAgICBBcHAgPSByZXF1aXJlKCcuL21vZGVsL0FwcC5qcycpLFxuICAgIERpcmVjdGlvbiA9IHJlcXVpcmUoJy4vbW9kZWwvRGlyZWN0aW9uLmpzJyksXG4gICAgRmlsdGVyID0gcmVxdWlyZSgnLi9tb2RlbC9GaWx0ZXIuanMnKSxcbiAgICBUZXN0ID0gcmVxdWlyZSgnLi9tb2RlbC9UZXN0LmpzJyksXG4gICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVyL2dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlci9zZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICBUZXN0TGlzdENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXIvdGVzdExpc3RDb250cm9sbGVyLmpzJyksXG4gICAgQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi92aWV3L2FkZEdyb3VwVmlldy5qcycpLFxuICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vdmlldy9zZXR0aW5nc1ZpZXcuanMnKSxcbiAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi92aWV3L2dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBHcm91cEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi92aWV3L2dyb3VwSXRlbVZpZXcuanMnKSxcbiAgICBFeGFtSXRlbVZpZXcgPSByZXF1aXJlKCcuL3ZpZXcvZXhhbUl0ZW1WaWV3LmpzJyksXG4gICAgcHJlZmlsbGVkR3JvdXBzID0gcmVxdWlyZSgnLi9wcmVmaWxsZWRHcm91cHMuanMnKSxcbiAgICBwcmVmaWxsZWREaXJlY3Rpb24gPSByZXF1aXJlKCcuL3ByZWZpbGxlZERpcmVjdGlvbi5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpLFxuICAgIGFjdGl2YXRlQXBwID0gcmVxdWlyZSgnLi9leGFtcGxlLmpzJyksXG4gICAgdHBsID0gcmVxdWlyZSgnLi92aWV3L3RwbC90cGxNb2RhbFNldHRpbmdzLmpzJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBhY3RpdmF0ZUFwcChhcHApO1xuICAgIGFwcC5ncm91cExpc3QgPSBwcmVmaWxsZWRHcm91cHM7XG4gICAgYXBwLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QgPSBwcmVmaWxsZWREaXJlY3Rpb247XG5cbiAgICBhcHAuc3RhcnQoKTtcbiB9XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==