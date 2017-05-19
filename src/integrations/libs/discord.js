const Integration = require('../../interfaces/Integration');
const Cache = require('../caches/discord.js');

class DiscordJSIntegration extends Integration {
  constructor(client, options = {}) {
    super(client, new Cache(options));
  }
}

module.exports = DiscordJSIntegration;
