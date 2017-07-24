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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var GroupListView = function () {
    function GroupListView(settings) {
        _classCallCheck(this, GroupListView);

        this.addGroupButton = document.querySelector(this.selectors.addGroupButton);
        this.settings = settings;

        this.activate();
    }

    _createClass(GroupListView, [{
        key: 'activate',
        value: function activate() {
            this.addGroupButton.addEventListener('click', function () {
                mediator.pub('openAddGroupdDialog');
            });

            document.querySelector(this.selectors.config).addEventListener('click', function () {
                mediator.pub('OpenSettings');
            }, false);
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                addGroupButton: '#add-group',
                config: '#config'
            };
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 2 */
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupItemView = __webpack_require__(16),
    AddGroupView = __webpack_require__(17),
    Group = __webpack_require__(2),
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
                var view = new GroupItemView(group.name);
                view.render();
            });
        }
    }, {
        key: 'addNewGroup',
        value: function addNewGroup(group) {
            var view = new GroupItemView(group.name);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = __webpack_require__(6),
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Direction = __webpack_require__(7);

var prefilledDirection = [new Direction('php'), new Direction('go'), new Direction('js')];

module.exports = prefilledDirection;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = __webpack_require__(3),
    GroupListView = __webpack_require__(1),
    GroupController = __webpack_require__(4),
    SettingsController = __webpack_require__(5);

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
                settingsController = new SettingsController(this.settings);

            groupController.renderGroupList();
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use srtict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var AddGroupView = function () {
    function AddGroupView(settings) {
        _classCallCheck(this, AddGroupView);

        this.directionDropDown = document.querySelector(this.selectors.directionDropDown);
        this.groupNameInput = document.querySelector(this.selectors.groupNameInput);
        this.closeButton = document.querySelector(this.selectors.closeButton);
        this.modal = document.querySelector(this.selectors.modal);
        this.save = document.querySelector(this.selectors.save);
        this.body = document.body;
        this.settings = settings;
    }

    _createClass(AddGroupView, [{
        key: 'show',
        value: function show() {
            var modalBackdrop = '<div id="modal-backdrop" class="modal-backdrop fade in"></div>';

            this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
            this.body.classList.add('modal-open');
            this.body.classList.add('with-modal');
            this.modal.classList.add('display');
            this.modal.classList.add('in');
            this.fillDirectionDropDown();
            this.activate();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.diactivate();

            this.body.classList.remove('modal-open');
            this.body.classList.remove('with-modal');
            this.modal.classList.remove('display');
            this.modal.classList.remove('in');

            document.querySelector(this.selectors.modalBackdrop).remove();
        }
    }, {
        key: 'activate',
        value: function activate() {
            $(this.selectors.save).bind('click', this.saveGroup.bind(this));
            $(this.selectors.closeButton).bind('click', this.hide.bind(this));
        }
    }, {
        key: 'diactivate',
        value: function diactivate() {
            $(this.selectors.save).unbind('click');
            $(this.selectors.closeButton).unbind('click');
            this.clearModalInput();
        }
    }, {
        key: 'saveGroup',
        value: function saveGroup(event) {
            event.preventDefault();

            var directionValue = this.directionDropDown.options[this.directionDropDown.selectedIndex].text,
                groupNameValue = this.groupNameInput.value,
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
        key: 'fillDirectionDropDown',
        value: function fillDirectionDropDown() {
            var options = '';

            this.settings.directionList.forEach(function (direction) {
                options += '<option>' + direction.name + '</option>';
            });
            this.directionDropDown.innerHTML = options;
        }
    }, {
        key: 'clearModalInput',
        value: function clearModalInput() {
            this.groupNameInput.value = '';
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                closeButton: '#close-button',
                save: '#save-group',
                modal: '#add-group-modal',
                directionDropDown: '#direction-dropdown',
                groupNameInput: '#group-name',
                modalBackdrop: '.modal-backdrop'
            };
        }
    }]);

    return AddGroupView;
}();

module.exports = AddGroupView;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(2),
    Test = __webpack_require__(8),
    prefilledDirection = __webpack_require__(9);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tpl = {};

tpl.modalSettings = function () {
    return '\n        <div id="settings" class="modalwin">\n            <div id="directionSelect"></div>\n            <br>\n            <button id="showTestList">Tests</button>\n            <button id="showFilterList">Filters</button>\n            <br>\n            <div id="TestListOfDirection">Tests should be here</div>\n            <br>\n            <div id="FilterListOfDirection">Filter should be here</div>\n        </div>      \n    ';
};

module.exports = tpl;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(2),
    Settings = __webpack_require__(3),
    App = __webpack_require__(10),
    Direction = __webpack_require__(7),
    Filter = __webpack_require__(11),
    Test = __webpack_require__(8),
    GroupController = __webpack_require__(4),
    SettingsController = __webpack_require__(5),
    AddGroupView = __webpack_require__(12),
    SettingsView = __webpack_require__(6),
    GroupListView = __webpack_require__(1),
    GroupItemView = __webpack_require__(1),
    prefilledGroups = __webpack_require__(13),
    prefilledDirection = __webpack_require__(9),
    mediator = __webpack_require__(0),
    tpl = __webpack_require__(14),
    init = __webpack_require__(18);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupItemView = function () {
    function GroupItemView(groupName) {
        _classCallCheck(this, GroupItemView);

        this.container = document.querySelector(this.selectors.groupContainer);
        this.groupName = groupName;
    }

    _createClass(GroupItemView, [{
        key: 'render',
        value: function render() {
            var template = '<div class="group-item">\n                            <div class="title">' + this.groupName + '</div>\n                                <a class="btn btn-primary btn-xs group-edit-exams">Edit exams</a>\n                        </div>';

            this.container.insertAdjacentHTML('afterBegin', template);
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                groupContainer: '#group-container'
            };
        }
    }]);

    return GroupItemView;
}();

module.exports = GroupItemView;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use srtict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

var AddGroupView = function () {
    function AddGroupView(settings) {
        _classCallCheck(this, AddGroupView);

        this.directionDropDown = document.querySelector(this.selectors.directionDropDown);
        this.groupNameInput = document.querySelector(this.selectors.groupNameInput);
        this.closeButton = document.querySelector(this.selectors.closeButton);
        this.modal = document.querySelector(this.selectors.modal);
        this.save = document.querySelector(this.selectors.save);
        this.body = document.body;
        this.settings = settings;
    }

    _createClass(AddGroupView, [{
        key: 'show',
        value: function show() {
            var modalBackdrop = '<div id="modal-backdrop" class="modal-backdrop fade in"></div>';

            this.body.insertAdjacentHTML('beforeEnd', modalBackdrop);
            this.body.classList.add('modal-open');
            this.body.classList.add('with-modal');
            this.modal.classList.add('display');
            this.modal.classList.add('in');
            this.fillDirectionDropDown();
            this.activate();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.diactivate();

            this.body.classList.remove('modal-open');
            this.body.classList.remove('with-modal');
            this.modal.classList.remove('display');
            this.modal.classList.remove('in');

            document.querySelector(this.selectors.modalBackdrop).remove();
        }
    }, {
        key: 'activate',
        value: function activate() {
            $(this.selectors.save).bind('click', this.saveGroup.bind(this));
            $(this.selectors.closeButton).bind('click', this.hide.bind(this));
        }
    }, {
        key: 'diactivate',
        value: function diactivate() {
            $(this.selectors.save).unbind('click');
            $(this.selectors.closeButton).unbind('click');
            this.clearModalInput();
        }
    }, {
        key: 'saveGroup',
        value: function saveGroup(event) {
            event.preventDefault();

            var directionValue = this.directionDropDown.options[this.directionDropDown.selectedIndex].text,
                groupNameValue = this.groupNameInput.value,
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
        key: 'fillDirectionDropDown',
        value: function fillDirectionDropDown() {
            var options = '';

            this.settings.directionList.forEach(function (direction) {
                options += '<option>' + direction.name + '</option>';
            });
            this.directionDropDown.innerHTML = options;
        }
    }, {
        key: 'clearModalInput',
        value: function clearModalInput() {
            this.groupNameInput.value = '';
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                closeButton: '#close-button',
                save: '#save-group',
                modal: '#add-group-modal',
                directionDropDown: '#direction-dropdown',
                groupNameInput: '#group-name',
                modalBackdrop: '.modal-backdrop'
            };
        }
    }]);

    return AddGroupView;
}();

module.exports = AddGroupView;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(2),
    Settings = __webpack_require__(3),
    App = __webpack_require__(10),
    Direction = __webpack_require__(7),
    Filter = __webpack_require__(11),
    Test = __webpack_require__(8),
    GroupController = __webpack_require__(4),
    SettingsController = __webpack_require__(5),
    AddGroupView = __webpack_require__(12),
    SettingsView = __webpack_require__(6),
    GroupListView = __webpack_require__(1),
    GroupItemView = __webpack_require__(1),
    prefilledGroups = __webpack_require__(13),
    prefilledDirection = __webpack_require__(9),
    mediator = __webpack_require__(0),
    tpl = __webpack_require__(14);

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    var app = new App();

    app.groupList = prefilledGroups;
    app.settings.directionList = prefilledDirection;

    app.start();
}

module.exports = init;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmIxYTY5OTNjYTNiYjYyN2M2ODEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3ZpZXcvZ3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21vZGVsL0dyb3VwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbW9kZWwvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9jb250cm9sbGVyL2dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvc2V0dGluZ3NDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdmlldy9zZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9EaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvcHJlZmlsbGVkRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbW9kZWwvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbW9kZWwvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdmlldy9BZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9wcmVmaWxsZWRHcm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L3RwbC90cGxNb2RhbFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2J1aWxkL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L2dyb3VwSXRlbVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L2FkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJjaGFubmVscyIsImNoYW5uZWwiLCJkYXRhIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJHcm91cExpc3RWaWV3Iiwic2V0dGluZ3MiLCJhZGRHcm91cEJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9ycyIsImFjdGl2YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1YiIsImNvbmZpZyIsIkdyb3VwIiwibmFtZSIsImRpcmVjdGlvbiIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsIlNldHRpbmdzIiwiZGlyZWN0aW9uTGlzdCIsIkRpcmVjdGlvbiIsIkdyb3VwSXRlbVZpZXciLCJBZGRHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJncm91cExpc3RWaWV3IiwiZ3JvdXAiLCJ2aWV3IiwicmVuZGVyIiwic3ViIiwic2hvd0FkZEdyb3VwSGFuZGxlciIsImJpbmQiLCJhZGROZXdHcm91cEhhbmRsZXIiLCJhZGRHcm91cE1vZGFsVmlldyIsInNob3ciLCJuZXdHcm91cCIsImdyb3VwZE5hbWUiLCJhZGROZXdHcm91cCIsIlNldHRpbmdzVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsInNob3dTZXR0aW5ncyIsInRlc3RGaWx0ZXJTd2l0Y2hlciIsInNob3dTZXR0aW5nc1dpbmRvdyIsInJlbmRlckRpcmVjdGlvbk5hbWVzIiwiZGFya0xheWVyIiwiY3JlYXRlRWxlbWVudCIsIm1vZGFsV2luIiwiaWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJkaXJlY3Rpb25TZWxlY3QiLCJvcHRpb25MaXN0IiwidHBsIiwiaSIsImlubmVySFRNTCIsImJ1dHRvblRlc3RzIiwiYnV0dG9uRmlsdGVycyIsImVsU2VsZWN0Iiwic2VsZWN0ZWREaXJlY3Rpb25OYW1lIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsInJlbmRlclRlc3RzT3JGaWx0ZXJzIiwiZGlyZWN0aW9uTmFtZSIsInJlbmRlclRlc3RzIiwicmVuZGVyRmlsdGVycyIsImxpc3RDb250YWluZXIiLCJidXR0b25BZGRUZXN0IiwiZmluZCIsInRlc3QiLCJidXR0b25BZGRGaWx0ZXIiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwibWF4R3JhZGUiLCJUZXN0IiwidGVzdHMiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIkZpbHRlciIsInByZWZpbGxlZERpcmVjdGlvbiIsIkFwcCIsImdyb3VwTGlzdCIsImdyb3VwQ29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsInJlbmRlckdyb3VwTGlzdCIsImRpcmVjdGlvbkRyb3BEb3duIiwiZ3JvdXBOYW1lSW5wdXQiLCJjbG9zZUJ1dHRvbiIsIm1vZGFsIiwic2F2ZSIsIm1vZGFsQmFja2Ryb3AiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJmaWxsRGlyZWN0aW9uRHJvcERvd24iLCJkaWFjdGl2YXRlIiwicmVtb3ZlIiwiJCIsInNhdmVHcm91cCIsImhpZGUiLCJ1bmJpbmQiLCJjbGVhck1vZGFsSW5wdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlyZWN0aW9uVmFsdWUiLCJ0ZXh0IiwiZ3JvdXBOYW1lVmFsdWUiLCJzZWxlY3RlZERpcmVjdGlvbiIsInByZWZpbGxlZEdyb3VwcyIsInRlc3RMaXN0UEhQIiwidGVzdExpc3RHbyIsInRlc3RMaXN0VUkiLCJtb2RhbFNldHRpbmdzIiwiaW5pdCIsImdyb3VwTmFtZSIsImNvbnRhaW5lciIsImdyb3VwQ29udGFpbmVyIiwidGVtcGxhdGUiLCJhcHAiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFRLENBQVIsQ0FQekI7QUFBQSxJQVFJb0IsZUFBZSxtQkFBQXBCLENBQVEsRUFBUixDQVJuQjtBQUFBLElBU0lvQyxlQUFlLG1CQUFBcEMsQ0FBUSxDQUFSLENBVG5CO0FBQUEsSUFVSUMsZ0JBQWdCLG1CQUFBRCxDQUFRLENBQVIsQ0FWcEI7QUFBQSxJQVdJbUIsZ0JBQWdCLG1CQUFBbkIsQ0FBUSxDQUFSLENBWHBCO0FBQUEsSUFZSWdILGtCQUFrQixtQkFBQWhILENBQVEsRUFBUixDQVp0QjtBQUFBLElBYUltRixxQkFBcUIsbUJBQUFuRixDQUFRLENBQVIsQ0FiekI7QUFBQSxJQWNJSCxXQUFXLG1CQUFBRyxDQUFRLENBQVIsQ0FkZjtBQUFBLElBZUlzRCxNQUFNLG1CQUFBdEQsQ0FBUSxFQUFSLENBZlY7O0FBaUJBSSxTQUFTSSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEM2RyxJQUE5QyxFQUFvRCxLQUFwRDs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ1osUUFBSUssTUFBTSxJQUFJdEMsR0FBSixFQUFWOztBQUVBc0MsUUFBSXJDLFNBQUosR0FBZ0IyQixlQUFoQjtBQUNBVSxRQUFJeEgsUUFBSixDQUFhZSxhQUFiLEdBQTZCa0Usa0JBQTdCOztBQUVBdUMsUUFBSUMsS0FBSjtBQUNIOztBQUVEN0gsT0FBT0MsT0FBUCxHQUFpQnNILElBQWpCLEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmIxYTY5OTNjYTNiYjYyN2M2ODEiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIH1cblxuICAgIHB1YiAoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XG4gICAgfVxufVxuXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5hZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuYWRkR3JvdXBCdXR0b24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RvcnMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b246ICcjYWRkLWdyb3VwJyxcbiAgICAgICAgICAgIGNvbmZpZzogJyNjb25maWcnICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWN0aXZhdGUgKCkge1xuICAgICAgICB0aGlzLmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdvcGVuQWRkR3JvdXBkRGlhbG9nJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmNvbmZpZykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ09wZW5TZXR0aW5ncycpO1xuICAgICAgICB9LCBmYWxzZSk7ICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy92aWV3L2dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLm5hbWU7XG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBkaXJlY3Rpb24udGVzdExpc3Q7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IGRpcmVjdGlvbi5maWx0ZXJMaXN0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvR3JvdXAuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFtdOyAgXG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0LnB1c2gobmV3IERpcmVjdGlvbihuYW1lKSk7XG4gICAgfVxufSAgICAgXG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21vZGVsL1NldHRpbmdzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBJdGVtVmlldyA9IHJlcXVpcmUoJy4uL3ZpZXcvZ3JvdXBJdGVtVmlldy5qcycpLFxuICAgIEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL3ZpZXcvYWRkR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXAgPSByZXF1aXJlKCcuLi9tb2RlbC9Hcm91cC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzLCBzZXR0aW5ncywgZ3JvdXBMaXN0Vmlldykge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdFZpZXcgPSBncm91cExpc3RWaWV3O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cExpc3QgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXcgPSBuZXcgR3JvdXBJdGVtVmlldyhncm91cC5uYW1lKTtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZE5ld0dyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgdmlldyA9IG5ldyBHcm91cEl0ZW1WaWV3KGdyb3VwLm5hbWUpO1xuXG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ29wZW5BZGRHcm91cGREaWFsb2cnLCB0aGlzLnNob3dBZGRHcm91cEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2F2ZUdyb3VwJywgdGhpcy5hZGROZXdHcm91cEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc2hvd0FkZEdyb3VwSGFuZGxlciAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cE1vZGFsVmlldyA9IG5ldyBBZGRHcm91cFZpZXcodGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgYWRkR3JvdXBNb2RhbFZpZXcuc2hvdygpO1xuICAgIH1cblxuICAgIGFkZE5ld0dyb3VwSGFuZGxlciAoZGF0YSkge1xuICAgICAgICBsZXQgbmV3R3JvdXAgPSBuZXcgR3JvdXAoZGF0YS5ncm91cGROYW1lLCBkYXRhLmRpcmVjdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFkZE5ld0dyb3VwKG5ld0dyb3VwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi92aWV3L3NldHRpbmdzVmlldy5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdPcGVuU2V0dGluZ3MnLCAoKSA9PiB0aGlzLnNob3dTZXR0aW5ncygpKTtcblxuICAgIH1cblxuICAgIHNob3dTZXR0aW5ncyAoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gbmV3IFNldHRpbmdzVmlldyh0aGlzLnNldHRpbmdzKTtcblxuICAgICAgICAvL3ZpZXcuc2hvd1NldHRpbmdzV2luZG93KCk7XG4gICAgICAgIC8vdmlldy5yZW5kZXJEaXJlY3Rpb25OYW1lcygpO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLyogIGdldERpcmVjdGlvbk5hbWVzICgpIHtcbiAgICBsZXQgbmFtZXMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2hbaXRlbS5uYW1lXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuYW1lcztcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25UZXN0cyAobmFtZSkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW0udGVzdExpc3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSovXG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvY29udHJvbGxlci9zZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy50ZXN0RmlsdGVyU3dpdGNoZXIgPSAnVCc7XG5cbiAgICAgICAgdGhpcy5zaG93U2V0dGluZ3NXaW5kb3coKTtcbiAgICAgICAgdGhpcy5yZW5kZXJEaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgc2hvd1NldHRpbmdzV2luZG93ICgpIHtcbiAgICAgICAgbGV0IGRhcmtMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgLy9tb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jb250YWluZXInKTtcbiAgICAgICAgICAgIG1vZGFsV2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzJyk7XG5cbiAgICAgICAgZGFya0xheWVyLmlkID0gJ3NoYWRvdyc7IC8vZGFya0xheWVyLnNldEF0cmlidXRlKCdpZCcpID0gJ3NoYWRvdyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGFya0xheWVyKTtcbiAgICAgICAgLy9tb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSB0cGwubW9kYWxTZXR0aW5ncygpO1xuICAgICAgICAvL21vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcbiAgICAgICAgbW9kYWxXaW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgZGFya0xheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGFya0xheWVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGFya0xheWVyKTtcbiAgICAgICAgICAgIC8vbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1vZGFsV2luLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZW5kZXJEaXJlY3Rpb25OYW1lcyAoKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlyZWN0aW9uU2VsZWN0JyksXG4gICAgICAgICAgICBvcHRpb25MaXN0ID0gJycsXG4gICAgICAgICAgICB0cGwgPSAnJztcblxuLy9jb25zb2xlLmxvZyhkaXJlY3Rpb25TZWxlY3QpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChkaXJlY3Rpb24sIGkpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbkxpc3QgKz0gYFxuICAgICAgICAgICAgICAgIDxvcHRpb24gJHsoaSA9IDApID8gJ3NlbGVjdGVkJyA6ICcnfSB2YWx1ZT1cIiR7ZGlyZWN0aW9uLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZGlyZWN0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9KTtcblxuICAgICAgICB0cGwgPSBgXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwic2V0dGluZ3MtZGlyZWN0aW9ucy1zZWxlY3RcIiBjbGFzcz1cImRpcmVjdGlvblwiPiBcbiAgICAgICAgICAgICAgICAke29wdGlvbkxpc3R9IFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZGREaXJlY3Rpb25cIj4gQWRkIGRpcmVjdGlvbiA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICBgO1xuXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5pbm5lckhUTUwgPSB0cGw7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUgKCkge1xuICAgICAgICBsZXQgYnV0dG9uVGVzdHMsIFxuICAgICAgICAgICAgYnV0dG9uRmlsdGVycyxcbiAgICAgICAgICAgIGVsU2VsZWN0O1xuXG4gICAgICAgIGJ1dHRvblRlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dUZXN0TGlzdCcpO1xuICAgICAgICBidXR0b25GaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dGaWx0ZXJMaXN0Jyk7XG4gICAgICAgIGVsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWRpcmVjdGlvbnMtc2VsZWN0Jyk7XG5cbiAgICAgICAgZWxTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGlyZWN0aW9uTmFtZTtcblxuICAgICAgICAgICAgc2VsZWN0ZWREaXJlY3Rpb25OYW1lID0gZWxTZWxlY3Qub3B0aW9uc1tlbFNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZERpcmVjdGlvbk5hbWUgPT09ICdhZGREaXJlY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGVzdHNPckZpbHRlcnMoc2VsZWN0ZWREaXJlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGJ1dHRvblRlc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWRpcmVjdGlvbnMtc2VsZWN0JyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREaXJlY3Rpb25OYW1lID0gZWxTZWxlY3Qub3B0aW9uc1tlbFNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50ZXN0RmlsdGVyU3dpdGNoZXIgPSAnVCc7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRlc3RzT3JGaWx0ZXJzKHNlbGVjdGVkRGlyZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAvL21lZGlhdG9yLnB1Yignc2hvd1Rlc3RMaXN0Jywgb3B0aW9ucyk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBidXR0b25GaWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWRpcmVjdGlvbnMtc2VsZWN0JyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREaXJlY3Rpb25OYW1lID0gZWxTZWxlY3Qub3B0aW9uc1tlbFNlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50ZXN0RmlsdGVyU3dpdGNoZXIgPSAnRic7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRlc3RzT3JGaWx0ZXJzKHNlbGVjdGVkRGlyZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAvL21lZGlhdG9yLnB1Yignc2hvd0ZpbHRlckxpc3QnLCBvcHRpb25zKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJlbmRlclRlc3RzT3JGaWx0ZXJzIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRlc3RGaWx0ZXJTd2l0Y2hlciA9PT0gJ1QnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRlc3RzKGRpcmVjdGlvbk5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGaWx0ZXJzKGRpcmVjdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVGVzdHMgKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdHMtZmlsdGVycy1jb250YWluZXInKSxcbiAgICAgICAgICAgIC8vdGVzdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGVzdExpc3RPZkRpcmVjdGlvbicpLFxuICAgICAgICAgICAgdHBsID0gYDxkaXY+VGVzdHM8dWw+YCxcbiAgICAgICAgICAgIGJ1dHRvbkFkZFRlc3QsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZpbmQoKGRpcmVjdGlvbikgPT4gZGlyZWN0aW9uTmFtZSA9PT0gZGlyZWN0aW9uLm5hbWUpO1xuICAgICAgICBkaXJlY3Rpb24udGVzdExpc3QuZm9yRWFjaCgodGVzdCkgPT4gdHBsICs9IGA8bGk+JHt0ZXN0Lm5hbWV9PC9saT5gKTtcbiAgICAgICAgdHBsICs9IGA8L3VsPjxidXR0b24gaWQ9XCJhZGQtdGVzdFwib25jbGljaz1cImNvbnNvbGUubG9nKCdBZGQgVGVzdCcpXCI+QWRkIHRlc3Q8L2J1dHRvbj48L2Rpdj5gO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IHRwbDsgIC8vZGlyZWN0aW9uLmZpbHRlckxpc3RbMF07XG5cbiAgICAgICAvLyBidXR0b25BZGRUZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10ZXN0Jyk7Ly9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgLy9idXR0b25BZGRUZXN0LmlkID0gJ2FkZC10ZXN0JztcbiAgICAgICAgLy8gbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25BZGRUZXN0KTtcbiAgICAgICAgLy9idXR0b25BZGRUZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uc29sZS5sb2coJ0FkZCBUZXN0JyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZW5kZXJGaWx0ZXJzIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3RzLWZpbHRlcnMtY29udGFpbmVyJyksXG4gICAgICAgICAgICAvL2ZpbHRlckxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRmlsdGVyTGlzdE9mRGlyZWN0aW9uJyksXG4gICAgICAgICAgICB0cGwgPSBgPGRpdj5GaWx0ZXJzPHVsPmAsXG4gICAgICAgICAgICBidXR0b25BZGRGaWx0ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZpbmQoKGRpcmVjdGlvbikgPT4gZGlyZWN0aW9uTmFtZSA9PT0gZGlyZWN0aW9uLm5hbWUpO1xuICAgICAgICBkaXJlY3Rpb24uZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHRwbCArPSBgPGxpPiR7ZmlsdGVyfTwvbGk+YCk7XG4gICAgICAgIHRwbCArPSBgPC91bD48YnV0dG9uIGlkPVwiYWRkLWZpbHRlclwiPkFkZCBmaWx0ZXI8L2J1dHRvbj48L2Rpdj5gO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IHRwbDsgIC8vZGlyZWN0aW9uLmZpbHRlckxpc3RbMF07XG4gICAgICAgIGJ1dHRvbkFkZEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZmlsdGVyJyk7XG4gICAgICAgIGJ1dHRvbkFkZEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnNvbGUubG9nKCdhZGQgZmlsdGVyJyksIGZhbHNlKTsgLy9wcmV2ZW50RGVmYXVsdCwgc3RvcFByb3BhZ2F0aW9uXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdmlldy9zZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHsgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkVGVzdCAobmFtZSwgbWF4R3JhZGUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KG5hbWUsIG1heEdyYWRlKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tb2RlbC9EaXJlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlc3Qge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBtYXhHcmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21vZGVsL1Rlc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBEaXJlY3Rpb24gPSByZXF1aXJlKCcuL21vZGVsL0RpcmVjdGlvbi5qcycpO1xuXG5sZXQgcHJlZmlsbGVkRGlyZWN0aW9uID0gW25ldyBEaXJlY3Rpb24oJ3BocCcpLCBuZXcgRGlyZWN0aW9uKCdnbycpLCBuZXcgRGlyZWN0aW9uKCdqcycpXTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaWxsZWREaXJlY3Rpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9wcmVmaWxsZWREaXJlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MuanMnKSxcbiAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vdmlldy9ncm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMnKSxcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVyL3NldHRpbmdzQ29udHJvbGxlci5qcycpO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgYWRkR3JvdXAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LnB1c2gobmV3IEdyb3VwKCkpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KHRoaXMuc2V0dGluZ3MpLFxuICAgICAgICAgICAgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwTGlzdCwgdGhpcy5zZXR0aW5ncywgZ3JvdXBMaXN0VmlldyksXG4gICAgICAgICAgICBzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKHRoaXMuc2V0dGluZ3MpO1xuXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5yZW5kZXJHcm91cExpc3QoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tb2RlbC9BcHAuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tb2RlbC9GaWx0ZXIuanMiLCIndXNlIHNydGljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmRpcmVjdGlvbkRyb3BEb3duKTtcbiAgICAgICAgdGhpcy5ncm91cE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZ3JvdXBOYW1lSW5wdXQpO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5jbG9zZUJ1dHRvbik7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLm1vZGFsKTtcbiAgICAgICAgdGhpcy5zYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5zYXZlKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RvcnMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xvc2VCdXR0b246ICcjY2xvc2UtYnV0dG9uJyxcbiAgICAgICAgICAgIHNhdmU6ICcjc2F2ZS1ncm91cCcsXG4gICAgICAgICAgICBtb2RhbDogJyNhZGQtZ3JvdXAtbW9kYWwnLFxuICAgICAgICAgICAgZGlyZWN0aW9uRHJvcERvd246ICcjZGlyZWN0aW9uLWRyb3Bkb3duJyxcbiAgICAgICAgICAgIGdyb3VwTmFtZUlucHV0OiAnI2dyb3VwLW5hbWUnLFxuICAgICAgICAgICAgbW9kYWxCYWNrZHJvcDogJy5tb2RhbC1iYWNrZHJvcCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG93ICgpIHtcbiAgICAgICAgbGV0IG1vZGFsQmFja2Ryb3AgPSAnPGRpdiBpZD1cIm1vZGFsLWJhY2tkcm9wXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCBmYWRlIGluXCI+PC9kaXY+JztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIG1vZGFsQmFja2Ryb3ApO1xuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnd2l0aC1tb2RhbCcpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdpbicpO1xuICAgICAgICB0aGlzLmZpbGxEaXJlY3Rpb25Ecm9wRG93bigpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIHRoaXMuZGlhY3RpdmF0ZSgpO1xuXG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3aXRoLW1vZGFsJyk7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5tb2RhbEJhY2tkcm9wKS5yZW1vdmUoKTtcbiAgICB9XG5cblxuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5zYXZlKS5iaW5kKCdjbGljaycsIHRoaXMuc2F2ZUdyb3VwLmJpbmQodGhpcykpO1xuICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmNsb3NlQnV0dG9uKS5iaW5kKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkaWFjdGl2YXRlICgpIHtcbiAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5zYXZlKS51bmJpbmQoJ2NsaWNrJyk7XG4gICAgICAgICQodGhpcy5zZWxlY3RvcnMuY2xvc2VCdXR0b24pLnVuYmluZCgnY2xpY2snKTtcbiAgICAgICAgdGhpcy5jbGVhck1vZGFsSW5wdXQoKTtcbiAgICB9XG5cbiAgICBzYXZlR3JvdXAgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvblZhbHVlID0gdGhpcy5kaXJlY3Rpb25Ecm9wRG93bi5vcHRpb25zW3RoaXMuZGlyZWN0aW9uRHJvcERvd24uc2VsZWN0ZWRJbmRleF0udGV4dCxcbiAgICAgICAgICAgIGdyb3VwTmFtZVZhbHVlID0gdGhpcy5ncm91cE5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZpbmQoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm5hbWUgPT09IGRpcmVjdGlvblZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3IucHViKCdzYXZlR3JvdXAnLCB7XG4gICAgICAgICAgICBncm91cGROYW1lOiBncm91cE5hbWVWYWx1ZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWREaXJlY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgZmlsbERpcmVjdGlvbkRyb3BEb3duICgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgICAgICB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7ZGlyZWN0aW9uLm5hbWV9PC9vcHRpb24+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRHJvcERvd24uaW5uZXJIVE1MID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjbGVhck1vZGFsSW5wdXQgKCkge1xuICAgICAgICB0aGlzLmdyb3VwTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXAgPSByZXF1aXJlKCcuL21vZGVsL0dyb3VwLmpzJyksXG5cdFRlc3QgPSByZXF1aXJlKCcuL21vZGVsL1Rlc3QuanMnKSxcbiAgICBwcmVmaWxsZWREaXJlY3Rpb24gPSByZXF1aXJlKCcuL3ByZWZpbGxlZERpcmVjdGlvbi5qcycpO1xuXG5sZXQgcHJlZmlsbGVkR3JvdXBzO1xuXG5sZXQgdGVzdExpc3RQSFAgPSBbXSxcbiAgICB0ZXN0TGlzdEdvID0gW10sXG4gICAgdGVzdExpc3RVSSA9IFtdO1xuXG50ZXN0TGlzdFBIUC5wdXNoKG5ldyBUZXN0KCdFbjEnLCAxMDApKTtcbnRlc3RMaXN0UEhQLnB1c2gobmV3IFRlc3QoJ0VuMicsIDEwMCkpO1xudGVzdExpc3RQSFAucHVzaChuZXcgVGVzdCgnRW4zJywgMTAwKSk7XG50ZXN0TGlzdFBIUC5wdXNoKG5ldyBUZXN0KCdFbjQnLCAxMDApKTtcbnRlc3RMaXN0UEhQLnB1c2gobmV3IFRlc3QoJ1RlY2ggUEhQJywgNDAwKSk7XG50ZXN0TGlzdFBIUC5wdXNoKG5ldyBUZXN0KCdFc3NheSBQSFAnLCA2MDApKTtcblxudGVzdExpc3RHby5wdXNoKG5ldyBUZXN0KCdFbjEnLCAxMDApKTtcbnRlc3RMaXN0R28ucHVzaChuZXcgVGVzdCgnRW4yJywgMTAwKSk7XG50ZXN0TGlzdEdvLnB1c2gobmV3IFRlc3QoJ0VuMycsIDEwMCkpO1xudGVzdExpc3RHby5wdXNoKG5ldyBUZXN0KCdFbjQnLCAxMDApKTtcbnRlc3RMaXN0R28ucHVzaChuZXcgVGVzdCgnVGVjaCBHbycsIDQwMCkpO1xudGVzdExpc3RHby5wdXNoKG5ldyBUZXN0KCdFc3NheSBHbycsIDYwMCkpO1xuXG50ZXN0TGlzdFVJLnB1c2gobmV3IFRlc3QoJ0VuMScsIDEwMCkpO1xudGVzdExpc3RVSS5wdXNoKG5ldyBUZXN0KCdFbjInLCAxMDApKTtcbnRlc3RMaXN0VUkucHVzaChuZXcgVGVzdCgnRW4zJywgMTAwKSk7XG50ZXN0TGlzdFVJLnB1c2gobmV3IFRlc3QoJ0VuNCcsIDEwMCkpO1xudGVzdExpc3RVSS5wdXNoKG5ldyBUZXN0KCdUZWNoIEpTJywgNDAwKSk7XG50ZXN0TGlzdFVJLnB1c2gobmV3IFRlc3QoJ0Vzc2F5IEpTJywgNjAwKSk7XG5cbnByZWZpbGxlZERpcmVjdGlvblswXS50ZXN0TGlzdCA9IHRlc3RMaXN0UEhQO1xucHJlZmlsbGVkRGlyZWN0aW9uWzBdLmZpbHRlckxpc3QgPSBbJ0ZpbHRlcjEgcGhwJywgJ0ZpbHRlcjIgcGhwJ107XG5cbnByZWZpbGxlZERpcmVjdGlvblsxXS50ZXN0TGlzdCA9IHRlc3RMaXN0R287XG5wcmVmaWxsZWREaXJlY3Rpb25bMV0uZmlsdGVyTGlzdCA9IFsnRmlsdGVyMSBnbycsICdGaWx0ZXIyIGdvJ107XG5cbnByZWZpbGxlZERpcmVjdGlvblsyXS50ZXN0TGlzdCA9IHRlc3RMaXN0VUk7XG5wcmVmaWxsZWREaXJlY3Rpb25bMl0uZmlsdGVyTGlzdCA9IFsnRmlsdGVyMSB1aScsICdGaWx0ZXIyIHVpJ107XG5cbnByZWZpbGxlZEdyb3VwcyA9IFtcbiAgICBuZXcgR3JvdXAoJ0RwLTEyMCcsIHByZWZpbGxlZERpcmVjdGlvblswXSksXG4gICAgbmV3IEdyb3VwKCdEcC0xMTInLCBwcmVmaWxsZWREaXJlY3Rpb25bMV0pLFxuICAgIG5ldyBHcm91cCgnRHAtMTE3JywgcHJlZmlsbGVkRGlyZWN0aW9uWzJdKVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaWxsZWRHcm91cHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9wcmVmaWxsZWRHcm91cHMuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCB0cGwgPSB7fTtcblxudHBsLm1vZGFsU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBpZD1cInNldHRpbmdzXCIgY2xhc3M9XCJtb2RhbHdpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImRpcmVjdGlvblNlbGVjdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNob3dUZXN0TGlzdFwiPlRlc3RzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwic2hvd0ZpbHRlckxpc3RcIj5GaWx0ZXJzPC9idXR0b24+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiVGVzdExpc3RPZkRpcmVjdGlvblwiPlRlc3RzIHNob3VsZCBiZSBoZXJlPC9kaXY+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiRmlsdGVyTGlzdE9mRGlyZWN0aW9uXCI+RmlsdGVyIHNob3VsZCBiZSBoZXJlPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgIFxuICAgIGA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvdHBsL3RwbE1vZGFsU2V0dGluZ3MuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cCA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvbW9kZWwvR3JvdXAuanMnKSxcbiAgICBTZXR0aW5ncyA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvbW9kZWwvU2V0dGluZ3MuanMnKSxcbiAgICBBcHAgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL21vZGVsL0FwcC5qcycpLFxuICAgIERpcmVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvbW9kZWwvRGlyZWN0aW9uLmpzJyksXG4gICAgRmlsdGVyID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9GaWx0ZXIuanMnKSxcbiAgICBUZXN0ID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9UZXN0LmpzJyksXG4gICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9jb250cm9sbGVyL2dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvY29udHJvbGxlci9zZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy92aWV3L3NldHRpbmdzVmlldy5qcycpLFxuICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvZ3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIEdyb3VwSXRlbVZpZXcgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvZ3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIHByZWZpbGxlZEdyb3VwcyA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvcHJlZmlsbGVkR3JvdXBzLmpzJyksXG4gICAgcHJlZmlsbGVkRGlyZWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9wcmVmaWxsZWREaXJlY3Rpb24uanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvTWVkaWF0b3IuanMnKSxcbiAgICB0cGwgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvdHBsL3RwbE1vZGFsU2V0dGluZ3MuanMnKSxcbiAgICBpbml0ID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tYWluLmpzJyk7XG5cblxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9idWlsZC9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cEl0ZW1WaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBOYW1lKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5ncm91cENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RvcnMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBDb250YWluZXI6ICcjZ3JvdXAtY29udGFpbmVyJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy5ncm91cE5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyBncm91cC1lZGl0LWV4YW1zXCI+RWRpdCBleGFtczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgdGVtcGxhdGUpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cEl0ZW1WaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy92aWV3L2dyb3VwSXRlbVZpZXcuanMiLCIndXNlIHNydGljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmRpcmVjdGlvbkRyb3BEb3duKTtcbiAgICAgICAgdGhpcy5ncm91cE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZ3JvdXBOYW1lSW5wdXQpO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5jbG9zZUJ1dHRvbik7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLm1vZGFsKTtcbiAgICAgICAgdGhpcy5zYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5zYXZlKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RvcnMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xvc2VCdXR0b246ICcjY2xvc2UtYnV0dG9uJyxcbiAgICAgICAgICAgIHNhdmU6ICcjc2F2ZS1ncm91cCcsXG4gICAgICAgICAgICBtb2RhbDogJyNhZGQtZ3JvdXAtbW9kYWwnLFxuICAgICAgICAgICAgZGlyZWN0aW9uRHJvcERvd246ICcjZGlyZWN0aW9uLWRyb3Bkb3duJyxcbiAgICAgICAgICAgIGdyb3VwTmFtZUlucHV0OiAnI2dyb3VwLW5hbWUnLFxuICAgICAgICAgICAgbW9kYWxCYWNrZHJvcDogJy5tb2RhbC1iYWNrZHJvcCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG93ICgpIHtcbiAgICAgICAgbGV0IG1vZGFsQmFja2Ryb3AgPSAnPGRpdiBpZD1cIm1vZGFsLWJhY2tkcm9wXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCBmYWRlIGluXCI+PC9kaXY+JztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIG1vZGFsQmFja2Ryb3ApO1xuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnd2l0aC1tb2RhbCcpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdpbicpO1xuICAgICAgICB0aGlzLmZpbGxEaXJlY3Rpb25Ecm9wRG93bigpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIHRoaXMuZGlhY3RpdmF0ZSgpO1xuXG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3aXRoLW1vZGFsJyk7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5tb2RhbEJhY2tkcm9wKS5yZW1vdmUoKTtcbiAgICB9XG5cblxuICAgIGFjdGl2YXRlICgpIHtcbiAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5zYXZlKS5iaW5kKCdjbGljaycsIHRoaXMuc2F2ZUdyb3VwLmJpbmQodGhpcykpO1xuICAgICAgICAkKHRoaXMuc2VsZWN0b3JzLmNsb3NlQnV0dG9uKS5iaW5kKCdjbGljaycsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkaWFjdGl2YXRlICgpIHtcbiAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5zYXZlKS51bmJpbmQoJ2NsaWNrJyk7XG4gICAgICAgICQodGhpcy5zZWxlY3RvcnMuY2xvc2VCdXR0b24pLnVuYmluZCgnY2xpY2snKTtcbiAgICAgICAgdGhpcy5jbGVhck1vZGFsSW5wdXQoKTtcbiAgICB9XG5cbiAgICBzYXZlR3JvdXAgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvblZhbHVlID0gdGhpcy5kaXJlY3Rpb25Ecm9wRG93bi5vcHRpb25zW3RoaXMuZGlyZWN0aW9uRHJvcERvd24uc2VsZWN0ZWRJbmRleF0udGV4dCxcbiAgICAgICAgICAgIGdyb3VwTmFtZVZhbHVlID0gdGhpcy5ncm91cE5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZpbmQoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm5hbWUgPT09IGRpcmVjdGlvblZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3IucHViKCdzYXZlR3JvdXAnLCB7XG4gICAgICAgICAgICBncm91cGROYW1lOiBncm91cE5hbWVWYWx1ZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWREaXJlY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgZmlsbERpcmVjdGlvbkRyb3BEb3duICgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgICAgICB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7ZGlyZWN0aW9uLm5hbWV9PC9vcHRpb24+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRHJvcERvd24uaW5uZXJIVE1MID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjbGVhck1vZGFsSW5wdXQgKCkge1xuICAgICAgICB0aGlzLmdyb3VwTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvYWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXAgPSByZXF1aXJlKCcuL21vZGVsL0dyb3VwLmpzJyksXG4gICAgU2V0dGluZ3MgPSByZXF1aXJlKCcuL21vZGVsL1NldHRpbmdzLmpzJyksXG4gICAgQXBwID0gcmVxdWlyZSgnLi9tb2RlbC9BcHAuanMnKSxcbiAgICBEaXJlY3Rpb24gPSByZXF1aXJlKCcuL21vZGVsL0RpcmVjdGlvbi5qcycpLFxuICAgIEZpbHRlciA9IHJlcXVpcmUoJy4vbW9kZWwvRmlsdGVyLmpzJyksXG4gICAgVGVzdCA9IHJlcXVpcmUoJy4vbW9kZWwvVGVzdC5qcycpLFxuICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMnKSxcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXIvc2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi92aWV3L0FkZEdyb3VwVmlldy5qcycpLFxuICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vdmlldy9zZXR0aW5nc1ZpZXcuanMnKSxcbiAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi92aWV3L2dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBHcm91cEl0ZW1WaWV3ID0gcmVxdWlyZSgnLi92aWV3L2dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBwcmVmaWxsZWRHcm91cHMgPSByZXF1aXJlKCcuL3ByZWZpbGxlZEdyb3Vwcy5qcycpLFxuICAgIHByZWZpbGxlZERpcmVjdGlvbiA9IHJlcXVpcmUoJy4vcHJlZmlsbGVkRGlyZWN0aW9uLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyksXG4gICAgdHBsID0gcmVxdWlyZSgnLi92aWV3L3RwbC90cGxNb2RhbFNldHRpbmdzLmpzJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcblxuICAgIGFwcC5ncm91cExpc3QgPSBwcmVmaWxsZWRHcm91cHM7XG4gICAgYXBwLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QgPSBwcmVmaWxsZWREaXJlY3Rpb247XG5cbiAgICBhcHAuc3RhcnQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==