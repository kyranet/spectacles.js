/* eslint-disable class-methods-use-this */
import { RedisClient } from 'redis';
import { IFormattedCommand } from '../interfaces/IFormattedCommand';
import { flatten } from '../util';

/**
 * The basic caching interface.
 * @param {RedisClient} redis
 */
export default abstract class Cache {
  public readonly redis: RedisClient;

  constructor(redis: RedisClient) {
    this.redis = redis;
  }

  /**
   * Cache the client's presence.
   * @abstract
   */
  public abstract storePresence(client: any): Promise<any>;

  /**
   * Cache the client user's information.
   * @abstract
   */
  public abstract storeMe(client: any): Promise<any>;

  /**
   * Remove a command from the cache.
   * @param {FormattedCommand} command The command to remove.
   * @abstract
   */
  public removeCommand(command: IFormattedCommand) {
    return this.redis.hdelAsync(`commands:${command.name}`);
  }

  /**
   * Cache multiple commands.
   * @param {Array<FormattedCommand>} commands The commands to store.
   * @abstract
   */
  public storeCommands(commands: IFormattedCommand[]) {
    if (commands.length === 1) {
      const command = commands[0];
      return this.redis.hmsetAsync(`commands:${command.name}`, flatten(command));
    }

    const q = this.redis.multi();
    commands.forEach((c) => q.hmset(`commands:${c.name}`, flatten(c)));
    return q.execAsync();
  }
}
