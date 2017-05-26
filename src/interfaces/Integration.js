/* eslint-disable class-methods-use-this */
const EventEmitter = require('events');
const util = require('../util');

/**
 * The basic spectacles integration.
 * @param {Client} client
 * @param {Cache} cache
 * @extends EventEmitter
 */
class Integration extends EventEmitter {
  constructor(client, cache) {
    super();
    this.client = client;
    this.cache = cache;
  }

  /**
   * Set multiple commands.
   * @param {Array<FormattedCommand>} [commands] An array of commands to get stored.
   * @returns {Promise}
   */
  setCommands(commands = this.getCommands()) {
    return this.cache.storeCommands(commands);
  }

  /**
   * Set a command.
   * @param {string} name
   * @returns {Promise}
   */
  setCommand(name) {
    return this.cache.storeCommand(this.getCommand(name));
  }

  /**
   * Unset a command.
   * @param {string} name
   * @returns {Promise}
   */
  unsetCommand(name) {
    return this.cache.removeCommand(name);
  }

  /**
   * Get an array of formatted commands.
   * @returns {Array<FormattedCommand>}
   * @abstract
   */
  getCommands() {
    util.interfaceError();
  }

  /**
   * Get a formatted command.
   * @param {string} name
   * @returns {FormattedCommand}
   * @abstract
   */
  getCommand() {
    util.interfaceError();
  }

  /**
   * Set the client's presence.
   * @returns {Promise}
   */
  setPresence() {
    return this.cache.storePresence(this.client);
  }

  /**
   * Set the client user data.
   * @returns {Promise}
   */
  setMe() {
    return this.cache.storeMe(this.client);
  }
}

module.exports = Integration;
