declare module 'discord.js-redis' {
  import { Client } from 'discord.js';
  import redis = require('redis');

  export class RedisClient {
    public discord: Client;
    public client: redis.RedisClient;
    constructor(client: Client, options: redis.Options);
  }

  export class RedisInterface {
    public static clean(obj: object): object;
  }
}
