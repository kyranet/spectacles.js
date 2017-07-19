declare module 'discord.js-redis' {
  import { Client } from 'discord.js';
  import redis = require('redis');

  export class RedisClient {
    constructor(client: Client, options: redis.Options);
    public discord: Client;
    public client: redis.RedisClient;
  }

  export class RedisInterface {
    public static clean(obj: Object): Object;
  }
}
