import { Client } from 'discord.js';

import Cache from '../../base/Cache';
import { flatten } from '../../util';
import dRedis = require('discord.js-redis');
import { Options as RedisOptions } from 'redis';

/**
 * The Discord.js cache interface.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends Cache
 */
export default class DiscordJSCache extends Cache {
  public readonly client: Client;

  constructor(client: Client, options: RedisOptions) {
    const redis = new dRedis.RedisClient(client, options);
    super(redis.client);
    this.client = client;
  }

  public storePresence() {
    return this.redis.hmsetAsync('presences', {
      [this.client.shard ? this.client.shard.id : 0]: JSON.stringify(this.client.user.presence),
    });
  }

  public storeMe() {
    return this.redis.hmsetAsync('me', flatten(this.client.user));
  }
}
