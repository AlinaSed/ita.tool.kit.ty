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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Direction = __webpack_require__(6),
    Group = __webpack_require__(0);

var prefilledDirection = [new Direction('php'), new Direction('go'), new Direction('js')];
var prefilledGroups = [new Group('Dp-120', prefilledDirection[0]), new Group('Dp-112', prefilledDirection[1]), new Group('Dp-117', prefilledDirection[2])];

module.exports = prefilledDirection;
module.exports = prefilledGroups;

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

var GroupView = __webpack_require__(5),
    Group = __webpack_require__(0),
    mediator = __webpack_require__(1);

var GroupController = function () {
    function GroupController(groups, settings, groupListView) {
        _classCallCheck(this, GroupController);

        this.groups = groups;
        this.settings = settings;
        this.groupListView = groupListView;
        this.activate();
    }

    _createClass(GroupController, [{
        key: 'renderGroupList',
        value: function renderGroupList(groups) {
            this.groups.forEach(function (group) {
                var view = new GroupView(group.name);
                view.render();
            });
        }
    }, {
        key: 'addNewGroup',
        value: function addNewGroup(group) {
            var view = new GroupView(group.name);
            view.render();
        }
    }, {
        key: 'activate',
        value: function activate() {
            var _this = this;

            mediator.sub('openAddGroupdDialog', this.fillDiretionDropwDownHandler.bind(this));

            mediator.sub('saveGroup', function (data) {
                var newGroup = new Group(data.groupdName, data.direction);
                _this.groups.push(newGroup);
                _this.addNewGroup(newGroup);
            });
        }
    }, {
        key: 'fillDiretionDropwDownHandler',
        value: function fillDiretionDropwDownHandler() {
            this.groupListView.fillDirectionDropDown();
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

var GroupView = function () {
    function GroupView(groupName) {
        _classCallCheck(this, GroupView);

        this.groupName = groupName;
        this.container = document.querySelector(this.selectors.groupContainer);
    }

    _createClass(GroupView, [{
        key: 'render',
        value: function render() {
            var template = '<div class="group-item"><div class="title">' + this.groupName + '</div><a class="btn btn-primary btn-xs group-edit-exams"> Edit exams </a></div>';

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

    return GroupView;
}();

module.exports = GroupView;

/***/ }),
/* 6 */
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
        value: function addTest(name, maxGrade, grade) {
            this.testList.push(new Test(name, maxGrade, grade));
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = __webpack_require__(3),
    GroupListView = __webpack_require__(13),
    GroupController = __webpack_require__(4);

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
            var groupListView = new GroupListView(this.settings);
            var groupController = new GroupController(this.groupList, this.settings, groupListView);

            groupController.renderGroupList();
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test(name, maxGrade, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    this.maxGrade = maxGrade;
    this.grade = grade;
};

module.exports = Test;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function () {
    function SettingsController(direction) {
        _classCallCheck(this, SettingsController);

        this.direction = direction;
        this.directionNames;
    }

    _createClass(SettingsController, [{
        key: 'getDirectionNames',
        value: function getDirectionNames() {
            var names = [];

            this.direction.forEach(function (item) {
                names.push[item.name];
            });
            return names;
        }
    }, {
        key: 'getDirectionTests',
        value: function getDirectionTests(name) {
            var result = [];

            this.direction.forEach(function (item) {
                result = item.testList;
            });

            return result;
        }
    }]);

    return SettingsController;
}();

module.exports = SettingsController;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = function SettingsView() {
    _classCallCheck(this, SettingsView);
};

module.exports = SettingsView;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(0),
    Settings = __webpack_require__(3),
    App = __webpack_require__(7),
    Direction = __webpack_require__(6),
    Filter = __webpack_require__(8),
    Test = __webpack_require__(9),
    GroupController = __webpack_require__(4),
    SettingsController = __webpack_require__(10),
    GroupView = __webpack_require__(5),
    SettingsView = __webpack_require__(11),
    prefilledGroups = __webpack_require__(2),
    prefilledDirection = __webpack_require__(2),
    mediator = __webpack_require__(1),
    init = __webpack_require__(14);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(1);

var GroupListView = function () {
    function GroupListView(settings) {
        _classCallCheck(this, GroupListView);

        this.settings = settings;
        this.activate();
    }

    _createClass(GroupListView, [{
        key: 'activate',
        value: function activate() {
            var _this = this;

            document.querySelector(this.selectors.addGroupButton).addEventListener('click', function () {
                mediator.pub('openAddGroupdDialog');
            });

            document.querySelector(this.selectors.saveGroup).addEventListener('click', function (event) {
                event.preventDefault();

                var directionDrowDownElement = document.querySelector(_this.selectors.directionDrowDown);
                var groupNameValue = document.querySelector(_this.selectors.groupNameInput).value;
                var directionValue = directionDrowDownElement.options[directionDrowDownElement.selectedIndex].text;
                var selectedDirection = _this.settings.directionList.filter(function (value) {
                    return value.name === directionValue;
                })[0];

                mediator.pub('saveGroup', {
                    groupdName: groupNameValue,
                    direction: selectedDirection
                });

                $(_this.selectors.addGroupdModal).modal('hide');
            });

            $(this.selectors.addGroupdModal).on('hidden.bs.modal', function () {
                _this.clearModalInput();
            });
        }
    }, {
        key: 'fillDirectionDropDown',
        value: function fillDirectionDropDown() {
            var directionDrowDown = document.querySelector(this.selectors.directionDrowDown);

            //clear select options 
            directionDrowDown.innerHTML = '';

            this.settings.directionList.forEach(function (direction) {
                directionDrowDown.insertAdjacentHTML('afterBegin', '  <option>' + direction.name + '</option>');
            });
        }
    }, {
        key: 'clearModalInput',
        value: function clearModalInput() {
            document.querySelector(this.selectors.groupNameInput).value = '';
        }
    }, {
        key: 'selectors',
        get: function get() {
            return {
                addGroupButton: '#add-group',
                directionDrowDown: '#direction-dropdown',
                saveGroup: '#save-group',
                groupNameInput: '#group-name',
                addGroupdModal: '#myModal'
            };
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Group = __webpack_require__(0),
    Settings = __webpack_require__(3),
    App = __webpack_require__(7),
    Direction = __webpack_require__(6),
    Filter = __webpack_require__(8),
    Test = __webpack_require__(9),
    GroupController = __webpack_require__(4),
    SettingsController = __webpack_require__(10),
    GroupView = __webpack_require__(5),
    SettingsView = __webpack_require__(11),
    prefilledGroups = __webpack_require__(2),
    prefilledDirection = __webpack_require__(2),
    mediator = __webpack_require__(1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDZhZmFjMmNiZjc2NTM0MjZkMDEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvZ3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdmlldy9ncm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9EaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvY29udHJvbGxlci9zZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy92aWV3L3NldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdmlldy9ncm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJHcm91cCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJ0ZXN0TGlzdCIsImZpbHRlckxpc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWVkaWF0b3IiLCJjaGFubmVscyIsImNoYW5uZWwiLCJkYXRhIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwiRGlyZWN0aW9uIiwicmVxdWlyZSIsInByZWZpbGxlZERpcmVjdGlvbiIsInByZWZpbGxlZEdyb3VwcyIsIlNldHRpbmdzIiwiZGlyZWN0aW9uTGlzdCIsIkdyb3VwVmlldyIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInNldHRpbmdzIiwiZ3JvdXBMaXN0VmlldyIsImFjdGl2YXRlIiwiZ3JvdXAiLCJ2aWV3IiwicmVuZGVyIiwic3ViIiwiZmlsbERpcmV0aW9uRHJvcHdEb3duSGFuZGxlciIsImJpbmQiLCJuZXdHcm91cCIsImdyb3VwZE5hbWUiLCJhZGROZXdHcm91cCIsImZpbGxEaXJlY3Rpb25Ecm9wRG93biIsImdyb3VwTmFtZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9ycyIsImdyb3VwQ29udGFpbmVyIiwidGVtcGxhdGUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJtYXhHcmFkZSIsImdyYWRlIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiRmlsdGVyIiwiR3JvdXBMaXN0VmlldyIsIkFwcCIsImdyb3VwTGlzdCIsImdyb3VwQ29udHJvbGxlciIsInJlbmRlckdyb3VwTGlzdCIsIlNldHRpbmdzQ29udHJvbGxlciIsImRpcmVjdGlvbk5hbWVzIiwibmFtZXMiLCJpdGVtIiwicmVzdWx0IiwiU2V0dGluZ3NWaWV3IiwiaW5pdCIsImFkZEdyb3VwQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1YiIsInNhdmVHcm91cCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXJlY3Rpb25Ecm93RG93bkVsZW1lbnQiLCJkaXJlY3Rpb25Ecm93RG93biIsImdyb3VwTmFtZVZhbHVlIiwiZ3JvdXBOYW1lSW5wdXQiLCJ2YWx1ZSIsImRpcmVjdGlvblZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0Iiwic2VsZWN0ZWREaXJlY3Rpb24iLCJmaWx0ZXIiLCIkIiwiYWRkR3JvdXBkTW9kYWwiLCJtb2RhbCIsIm9uIiwiY2xlYXJNb2RhbElucHV0IiwiaW5u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LENBQVEsQ0FBUixDQURmO0FBQUEsSUFFSXFDLE1BQU0sbUJBQUFyQyxDQUFRLENBQVIsQ0FGVjtBQUFBLElBR0lELFlBQVksbUJBQUFDLENBQVEsQ0FBUixDQUhoQjtBQUFBLElBSUltQyxTQUFTLG1CQUFBbkMsQ0FBUSxDQUFSLENBSmI7QUFBQSxJQUtJK0IsT0FBTyxtQkFBQS9CLENBQVEsQ0FBUixDQUxYO0FBQUEsSUFNSU0sa0JBQWtCLG1CQUFBTixDQUFRLENBQVIsQ0FOdEI7QUFBQSxJQU9JeUMscUJBQXFCLG1CQUFBekMsQ0FBUSxFQUFSLENBUHpCO0FBQUEsSUFRSUssWUFBWSxtQkFBQUwsQ0FBUSxDQUFSLENBUmhCO0FBQUEsSUFTSThDLGVBQWUsbUJBQUE5QyxDQUFRLEVBQVIsQ0FUbkI7QUFBQSxJQVVJRSxrQkFBa0IsbUJBQUFGLENBQVEsQ0FBUixDQVZ0QjtBQUFBLElBV0lDLHFCQUFxQixtQkFBQUQsQ0FBUSxDQUFSLENBWHpCO0FBQUEsSUFZSUYsV0FBVyxtQkFBQUUsQ0FBUSxDQUFSLENBWmY7O0FBY0F1QixTQUFTMEIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDRixJQUE5QyxFQUFvRCxLQUFwRDs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ1osUUFBSXdCLE1BQU0sSUFBSWxDLEdBQUosRUFBVjs7QUFFQWtDLFFBQUlqQyxTQUFKLEdBQWdCcEMsZUFBaEI7QUFDQXFFLFFBQUkvRCxRQUFKLENBQWFKLGFBQWIsR0FBNkJILGtCQUE3Qjs7QUFFQXNFLFFBQUlDLEtBQUo7QUFDSDs7QUFFRG5GLE9BQU9DLE9BQVAsR0FBaUJ5RCxJQUFqQixDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ2YWZhYzJjYmY3NjUzNDI2ZDAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5uYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gZGlyZWN0aW9uLnRlc3RMaXN0O1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBkaXJlY3Rpb24uZmlsdGVyTGlzdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21vZGVsL0dyb3VwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNZWRpYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLnB1c2goZm4pO1xuICAgIH1cbn1cblxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IERpcmVjdGlvbiA9IHJlcXVpcmUoJy4vbW9kZWwvRGlyZWN0aW9uLmpzJyksXG4gICAgR3JvdXAgPSByZXF1aXJlKCcuL21vZGVsL0dyb3VwLmpzJyk7XG5cbmxldCBwcmVmaWxsZWREaXJlY3Rpb24gPSBbbmV3IERpcmVjdGlvbigncGhwJyksIG5ldyBEaXJlY3Rpb24oJ2dvJyksIG5ldyBEaXJlY3Rpb24oJ2pzJyldO1xubGV0IHByZWZpbGxlZEdyb3VwcyA9IFtcbiAgICBuZXcgR3JvdXAoJ0RwLTEyMCcsIHByZWZpbGxlZERpcmVjdGlvblswXSksXG4gICAgbmV3IEdyb3VwKCdEcC0xMTInLCBwcmVmaWxsZWREaXJlY3Rpb25bMV0pLFxuICAgIG5ldyBHcm91cCgnRHAtMTE3JywgcHJlZmlsbGVkRGlyZWN0aW9uWzJdKVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaWxsZWREaXJlY3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IHByZWZpbGxlZEdyb3VwcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTsgIFxuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdC5wdXNoKG5ldyBEaXJlY3Rpb24obmFtZSkpO1xuICAgIH1cbn0gICAgIFxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tb2RlbC9TZXR0aW5ncy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL3ZpZXcvZ3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXAgPSByZXF1aXJlKCcuLi9tb2RlbC9Hcm91cC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihncm91cHMsIHNldHRpbmdzLCBncm91cExpc3RWaWV3KSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0VmlldyA9IGdyb3VwTGlzdFZpZXc7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cExpc3QoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldyA9IG5ldyBHcm91cFZpZXcoZ3JvdXAubmFtZSk7XG4gICAgICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGROZXdHcm91cChncm91cCkge1xuICAgICAgICBsZXQgdmlldyA9IG5ldyBHcm91cFZpZXcoZ3JvdXAubmFtZSk7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignb3BlbkFkZEdyb3VwZERpYWxvZycsIHRoaXMuZmlsbERpcmV0aW9uRHJvcHdEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NhdmVHcm91cCcsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3R3JvdXAgPSBuZXcgR3JvdXAoZGF0YS5ncm91cGROYW1lLCBkYXRhLmRpcmVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKG5ld0dyb3VwKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3R3JvdXAobmV3R3JvdXApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbGxEaXJldGlvbkRyb3B3RG93bkhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0Vmlldy5maWxsRGlyZWN0aW9uRHJvcERvd24oKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IoZ3JvdXBOYW1lKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZ3JvdXBDb250YWluZXIpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RvcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cENvbnRhaW5lcjogJyNncm91cC1jb250YWluZXInXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cImdyb3VwLWl0ZW1cIj48ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMuZ3JvdXBOYW1lfTwvZGl2PjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyBncm91cC1lZGl0LWV4YW1zXCI+IEVkaXQgZXhhbXMgPC9hPjwvZGl2PmA7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgdGVtcGxhdGUpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3ZpZXcvZ3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBEaXJlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7IFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRlc3QgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tb2RlbC9EaXJlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MuanMnKSxcbiAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vdmlldy9ncm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xuICAgIH1cblxuICAgIGFkZEdyb3VwKCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdC5wdXNoKG5ldyBHcm91cCgpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0Vmlldyh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cExpc3QsIHRoaXMuc2V0dGluZ3MsIGdyb3VwTGlzdFZpZXcpO1xuICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIucmVuZGVyR3JvdXBMaXN0KCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21vZGVsL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21vZGVsL0ZpbHRlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbW9kZWwvVGVzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IgKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lcztcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XG5cdGxldCBuYW1lcyA9IFtdO1xuXHQgICAgXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2hbaXRlbS5uYW1lXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuYW1lcztcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25UZXN0cyAobmFtZSkge1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdCAgICBcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gaXRlbS50ZXN0TGlzdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvY29udHJvbGxlci9zZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzVmlldyB7XG4gICAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy92aWV3L3NldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9Hcm91cC5qcycpLFxuICAgIFNldHRpbmdzID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9TZXR0aW5ncy5qcycpLFxuICAgIEFwcCA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvbW9kZWwvQXBwLmpzJyksXG4gICAgRGlyZWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tb2RlbC9EaXJlY3Rpb24uanMnKSxcbiAgICBGaWx0ZXIgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL21vZGVsL0ZpbHRlci5qcycpLFxuICAgIFRlc3QgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL21vZGVsL1Rlc3QuanMnKSxcbiAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL2NvbnRyb2xsZXIvZ3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9jb250cm9sbGVyL3NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvdmlldy9ncm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9wcm9qZWN0L2pzL3ZpZXcvc2V0dGluZ3NWaWV3LmpzJyksXG4gICAgcHJlZmlsbGVkR3JvdXBzID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcycpLFxuICAgIHByZWZpbGxlZERpcmVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvdGVzdERhdGEuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL3Byb2plY3QvanMvTWVkaWF0b3IuanMnKSxcbiAgICBpbml0ID0gcmVxdWlyZSgnLi4vcHJvamVjdC9qcy9tYWluLmpzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYnVpbGQvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uOiAnI2FkZC1ncm91cCcsXG4gICAgICAgICAgICBkaXJlY3Rpb25Ecm93RG93bjogJyNkaXJlY3Rpb24tZHJvcGRvd24nLFxuICAgICAgICAgICAgc2F2ZUdyb3VwOiAnI3NhdmUtZ3JvdXAnLFxuICAgICAgICAgICAgZ3JvdXBOYW1lSW5wdXQ6ICcjZ3JvdXAtbmFtZScsXG4gICAgICAgICAgICBhZGRHcm91cGRNb2RhbDogJyNteU1vZGFsJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFkZEdyb3VwQnV0dG9uKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Yignb3BlbkFkZEdyb3VwZERpYWxvZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnNhdmVHcm91cCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25Ecm93RG93bkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmRpcmVjdGlvbkRyb3dEb3duKTtcbiAgICAgICAgICAgIGxldCBncm91cE5hbWVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZ3JvdXBOYW1lSW5wdXQpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvblZhbHVlID0gZGlyZWN0aW9uRHJvd0Rvd25FbGVtZW50Lm9wdGlvbnNbZGlyZWN0aW9uRHJvd0Rvd25FbGVtZW50LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5uYW1lID09PSBkaXJlY3Rpb25WYWx1ZTtcbiAgICAgICAgICAgIH0pWzBdO1xuXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NhdmVHcm91cCcsIHtcbiAgICAgICAgICAgICAgICBncm91cGROYW1lOiBncm91cE5hbWVWYWx1ZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHNlbGVjdGVkRGlyZWN0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5hZGRHcm91cGRNb2RhbCkubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzLnNlbGVjdG9ycy5hZGRHcm91cGRNb2RhbCkub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJNb2RhbElucHV0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbGxEaXJlY3Rpb25Ecm9wRG93bigpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbkRyb3dEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5kaXJlY3Rpb25Ecm93RG93bik7XG5cbiAgICAgICAgLy9jbGVhciBzZWxlY3Qgb3B0aW9ucyBcbiAgICAgICAgZGlyZWN0aW9uRHJvd0Rvd24uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgZGlyZWN0aW9uRHJvd0Rvd24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgYCAgPG9wdGlvbj4ke2RpcmVjdGlvbi5uYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhck1vZGFsSW5wdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZ3JvdXBOYW1lSW5wdXQpLnZhbHVlID0gJyc7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdmlldy9ncm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXAgPSByZXF1aXJlKCcuL21vZGVsL0dyb3VwLmpzJyksXG4gICAgU2V0dGluZ3MgPSByZXF1aXJlKCcuL21vZGVsL1NldHRpbmdzLmpzJyksXG4gICAgQXBwID0gcmVxdWlyZSgnLi9tb2RlbC9BcHAuanMnKSxcbiAgICBEaXJlY3Rpb24gPSByZXF1aXJlKCcuL21vZGVsL0RpcmVjdGlvbi5qcycpLFxuICAgIEZpbHRlciA9IHJlcXVpcmUoJy4vbW9kZWwvRmlsdGVyLmpzJyksXG4gICAgVGVzdCA9IHJlcXVpcmUoJy4vbW9kZWwvVGVzdC5qcycpLFxuICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlci9ncm91cENvbnRyb2xsZXIuanMnKSxcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXIvc2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi92aWV3L2dyb3VwVmlldy5qcycpLFxuICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vdmlldy9zZXR0aW5nc1ZpZXcuanMnKSxcbiAgICBwcmVmaWxsZWRHcm91cHMgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXG4gICAgcHJlZmlsbGVkRGlyZWN0aW9uID0gcmVxdWlyZSgnLi90ZXN0RGF0YS5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGxldCBhcHAgPSBuZXcgQXBwKCk7XG5cbiAgICBhcHAuZ3JvdXBMaXN0ID0gcHJlZmlsbGVkR3JvdXBzO1xuICAgIGFwcC5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0ID0gcHJlZmlsbGVkRGlyZWN0aW9uO1xuXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9