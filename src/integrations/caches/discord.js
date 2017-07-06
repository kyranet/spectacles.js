const Cache = require('../../interfaces/Cache');
const { flatten } = require('../../util');
const dRedis = require('discord.js-redis');

/**
 * The Discord.js cache interface.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends Cache
 */
class DiscordJSCache extends Cache {
  constructor(client, options) {
    const redis = new dRedis.RedisClient(client, options);
    super(redis.client);
    this.client = client;
  }

  storePresence() {
    return this.redis.hmsetAsync('presences', {
      [this.client.shard ? this.client.shard.id : 0]: JSON.stringify(this.client.user.presence),
    });
  }

  storeMe() {
    return this.redis.hmsetAsync('me', dRedis.RedisInterface.clean(this.client.user));
  }

  removeCommand(name) {
    return this.redis.hdelAsync(`commands:${name}`);
  }

  storeCommand(command) {
    return this.redis.hmsetAsync(`commands:${command.name}`, flatten(command));
  }

  storeCommands(commands) {
    const q = this.redis.multi();
    commands.forEach(c => q.hmset(`commands:${c.name}`, flatten(c)));
    return q.execAsync();
  }
}

module.exports = DiscordJSCache;
