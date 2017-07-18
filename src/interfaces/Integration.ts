/* eslint-disable class-methods-use-this */
import Cache from './Cache';
import EventEmitter = require('events');
import { IFormattedCommand } from '../types/FormattedCommand';
import * as util from '../util';

/**
 * The basic spectacles integration.
 * @param {Client} client
 * @param {Cache} cache
 * @extends EventEmitter
 */
export default abstract class Integration extends EventEmitter {
  public readonly cache: Cache;

  constructor(cache: Cache) {
    super();
    this.cache = cache;
  }

  /**
   * Set multiple commands.
   * @param {Array<FormattedCommand>} [commands] An array of commands to get stored.
   * @returns {Promise}
   */
  public setCommands(commands: IFormattedCommand[] = this.getCommands()) {
    return this.cache.storeCommands(commands);
  }

  /**
   * Set a command.
   * @param {FormattedCommand} command
   * @returns {Promise}
   */
  public setCommand(command: IFormattedCommand) {
    return this.setCommands([command]);
  }

  /**
   * Unset a command.
   * @param {FormattedCommand} command
   * @returns {Promise}
   */
  public unsetCommand(command: IFormattedCommand) {
    return this.cache.removeCommand(command);
  }

  public setConfigs(configs = this.getConfigs()) {
    return this.cache.storeConfigs(configs);
  }

  public setConfig(config) {
    return this.setConfigs([config]);
  }

  /**
   * Set the client's presence.
   * @returns {Promise}
   */
  public setPresence() {
    return this.cache.storePresence(this.client);
  }

  /**
   * Set the client user data.
   * @returns {Promise}
   */
  public setMe() {
    return this.cache.storeMe(this.client);
  }

  /**
   * Get an array of formatted commands.
   * @returns {Array<FormattedCommand>}
   * @abstract
   */
  public abstract getCommands(): IFormattedCommand[];

  /**
   * Get a formatted command.
   * @param {string} name
   * @returns {?FormattedCommand}
   * @abstract
   */
  public abstract getCommand(name: string): IFormattedCommand;
}
