import Cache from './interfaces/Cache';

import Integration from './interfaces/Integration';
import DiscordJSIntegration from './integrations/discord.js/Integration';

import CommandoIntegration from './integrations/discord.js/frameworks/Commando';
import AkairoIntegration from './integrations/discord.js/frameworks/Akairo';

export default (lib, framework) => {
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
