const Cache = require('../../interfaces/Cache');
const dRedis = require('discord.js-redis');

class DiscordJSCache extends Cache {
  constructor(options) {
    const redis = new dRedis.Client(options);
    super(redis.client);
  }

  storePresence(client) {
    return this.redis.hmsetAsync('presences', {
      [client.shard ? client.shard.id : 0]: JSON.stringify(client.user.presence),
    });
  }

  storeMe(client) {
    return this.redis.hmsetAsync('me', dRedis.RedisInterface.clean(client.user));
  }

  storeCommand(command) {
    return this.redis.hmsetAsync(`commands:${command.name}`, command);
  }

  storeCommands(commands) {
    const q = this.redis.multi();
    commands.forEach(c => q.hmset(`commands:${c.name}`, c));
    return q.execAsync();
  }
}

module.exports = DiscordJSCache;
