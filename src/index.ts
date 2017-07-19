import Cache from './base/Cache';
import Integration from './base/Integration';

import DiscordJSIntegration from './integrations/discord.js/Integration';

// import AkairoIntegration from './integrations/discord.js/frameworks/Akairo';
import CommandoIntegration from './integrations/discord.js/frameworks/Commando';
import KomadaIntegration from './integrations/discord.js/frameworks/Komada';

export default (lib: string, framework: string) => {
  switch (lib) {
    case 'discord.js': {
      switch (framework) {
        case 'commando':
          return CommandoIntegration;
        // case 'akairo':
        //   return AkairoIntegration;
        case 'komada':
          return KomadaIntegration;
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
