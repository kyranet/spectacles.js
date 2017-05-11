const EventEmitter = require('events');
const redis = require('discord.js-redis');

class DiscordJS extends EventEmitter {
  constructor(client, options) {
    super();
    this.client = client;
    this.options = options;
    this.redis = new redis.Client(this.client, this.options);

    if (this.redis.ready) this.emit('ready', this);
    else this.redis.once('ready', () => this.emit('ready', this));
  }

  setPresences() {
    return this.redis.client.hmsetAsync('presences', {
      [this.client.shard ? this.client.shard.id : 0]:
        JSON.stringify(redis.RedisInterface.flatten(this.client.user.presence)),
    });
  }

  setMe() {
    return this.redis.client.hmsetAsync('me', {
      id: this.client.user.id,
      username: this.client.user.username,
      disciminator: this.client.user.discriminator,
      avatar: this.client.user.avatar,
      bot: this.client.user.bot,
    });
  }
}

module.exports = DiscordJS;
