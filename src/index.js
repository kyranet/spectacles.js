const Cache = require('./interfaces/Cache');
const DiscordJSCache = require('./integrations/caches/discord.js');

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
          return { DiscordJSIntegration, DiscordJSCache };
      }
    }
    default:
      return { Integration, Cache };
  }
};
