/* eslint-disable class-methods-use-this */
const EventEmitter = require('events');
const util = require('../util');

class Integration extends EventEmitter {
  constructor(client, cache) {
    super();
    this.client = client;
    this.cache = cache;
  }

  setCommands() {
    return this.cache.storeCommands(this.getCommands());
  }

  setCommand(name) {
    return this.cache.storeCommand(this.getCommand(name));
  }

  getCommands() {
    util.interfaceError();
  }

  getCommand() {
    util.interfaceError();
  }

  setPresence() {
    return this.cache.storePresence(this.client);
  }

  setMe() {
    return this.cache.storeMe(this.client);
  }
}

module.exports = Integration;
