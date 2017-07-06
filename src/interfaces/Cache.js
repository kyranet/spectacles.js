/* eslint-disable class-methods-use-this */
const util = require('../util');

/**
 * The basic caching interface.
 * @param {RedisClient} redis
 */
class Cache {
  constructor(redis) {
    this.redis = redis;
  }

  /**
   * Cache the client's presence.
   * @abstract
   */
  storePresence() {
    util.interfaceError();
  }

  /**
   * Cache the client user's information.
   * @abstract
   */
  storeMe() {
    util.interfaceError();
  }

  /**
   * Remove a command from the cache.
   * @param {string} id The command identifier.
   * @abstract
   */
  removeCommand() {
    util.interfaceError();
  }

  /**
   * Cache a command.
   * @param {FormattedCommand} command The command to store.
   * @abstract
   */
  storeCommand() {
    util.interfaceError();
  }

  /**
   * Cache multiple commands.
   * @param {Array<FormattedCommand>} commands The commands to store.
   * @abstract
   */
  storeCommands() {
    util.interfaceError();
  }
}

module.exports = Cache;
