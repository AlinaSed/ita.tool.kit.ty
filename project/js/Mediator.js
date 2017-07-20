'use strict';

class Mediator {
    constructor () {
        this.channels = {};
    }

    publish (channel, data) {
        if (this.channels[channel]) {
            this.channels[channel].forEach((fn) => fn(data));
        }
    }

    subscribe (channel, fn) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push(fn);
    }
}
