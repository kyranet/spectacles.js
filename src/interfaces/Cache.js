/* eslint-disable class-methods-use-this */
const util = require('../util');

class Cache {
  constructor(redis) {
    this.redis = redis;
  }

  storePresence() {
    util.interfaceError();
  }

  storeMe() {
    util.interfaceError();
  }

  storeCommand() {
    util.interfaceError();
  }

  storeCommands() {
    util.interfaceError();
  }
}

module.exports = Cache;
