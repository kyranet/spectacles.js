const dRedis = require('discord.js-redis');
const setup = require('./setup');

module.exports = (client, options) => {
  const redis = dRedis(options.redis);
  return setup(redis.client, options.info).then(() => redis(client));
};
