let mediator = require('./Mediator.js');

function activateApp(app) {
    mediator.sub('addSelectedGroup', (group) => {
        app.groupList.push(group);
    });
}

module.exports = activateApp;