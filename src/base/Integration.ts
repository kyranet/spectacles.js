/* eslint-disable class-methods-use-this */
import Cache from './Cache';
import EventEmitter = require('events');
import { IFormattedCommand } from '../interfaces/IFormattedCommand';
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

  /**
   * Set the client's presence.
   * @returns {Promise}
   */
  public abstract setPresence(): Promise<any>;

  /**
   * Set the client user data.
   * @returns {Promise}
   */
  public abstract setMe(): Promise<any>;

  /**
   * Get an array of formatted commands.
   * @returns {Array<FormattedCommand>}
   * @abstract
   */
  public abstract getCommands(): IFormattedCommand[];
}
