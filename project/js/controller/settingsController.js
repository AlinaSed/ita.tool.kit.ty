'use strict';

class SettingsController {
	constructor (direction) {
        this.direction = direction;
        this.directionNames;
    }

    getDirectionNames () {
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
    }
}
