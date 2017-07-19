import { Client } from 'discord.js';
import { Options as RedisOptions } from 'redis';

import Integration from '../../base/Integration';
import Cache from './Cache';

/**
 * The Discord.js-Spectacles integration.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends Integration
 */
export default abstract class DiscordJSIntegration extends Integration {
  public abstract client: Client;

  constructor(client: Client, options: RedisOptions) {
    super(new Cache(client, options));
  }

  public setPresence() {
    return this.cache.storePresence(this.client);
  }

  public setMe() {
    return this.cache.storeMe(this.client);
  }
}
