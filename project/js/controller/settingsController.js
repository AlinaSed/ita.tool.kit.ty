'use strict';

export class SettingsController {
	constructor (direction) {
        this.direction = direction;
        this.directionNames;
    }

    getDirectionNames () {
	let names = [];
	    
        this.direction.forEach((item)=>{
            names.push[item.name]
        });
        return names;
    }

    getDirectionTests (name) {
        this.direction.forEach((item)=>{
            if (item.name !== name) continue;
            let result = item.testList;
        });
        return result;
    }

}
