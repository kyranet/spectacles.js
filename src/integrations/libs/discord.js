const Integration = require('../../interfaces/Integration');
const Cache = require('../caches/discord.js');

/**
 * The Discord.js-Spectacles integration.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends Integration
 */
class DiscordJSIntegration extends Integration {
  constructor(client, options = {}) {
    super(client, new Cache(client, options));
  }
}

module.exports = DiscordJSIntegration;
