const Integration = require('../../Integration');
const redis = require('discord.js-redis');

class DiscordJSIntegration extends Integration {
  constructor(client, options = {}) {
    super();
    this.client = client;
    this.redis = new redis.Client(options);
  }

  setPresence() {
    return this.redis.client.hmsetAsync('presences', {
      [this.client.shard ? this.client.shard.id : 0]: JSON.stringify(this.client.user.presence),
    });
  }

  setMe() {
    return this.redis.client.hmsetAsync('me', redis.RedisInterface.clean(this.client.user));
  }
}

module.exports = DiscordJSIntegration;
