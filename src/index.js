const Cache = require('./interfaces/Cache');

const Integration = require('./interfaces/Integration');
const DiscordJSIntegration = require('./integrations/libs/discord.js');

const CommandoIntegration = require('./integrations/Commando');
const AkairoIntegration = require('./integrations/Akairo');

module.exports = (lib, framework) => {
  switch (lib) {
    case 'discord.js': {
      switch (framework) {
        case 'commando':
          return CommandoIntegration;
        case 'akairo':
          return AkairoIntegration;
        default:
          return DiscordJSIntegration;
      }
    }
    default:
      return { Integration, Cache };
  }
};

/**
 * @typedef {Object} FormattedCommand
 * @property {string} name
 * @property {string} description
 * @property {Array<string>} aliases
 */
