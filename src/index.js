const DiscordJS = require('./libs/discord');

module.exports = (lib, client, options) => {
  let integration;
  switch (lib) {
    case 'discord.js':
      integration = new DiscordJS(client, options);
      break;
    default:
      throw new Error(`The library ${lib} isn't supported.`);
  }

  integration.once('ready', () => {
    integration.setPresences();
    integration.setMe();
  });

  return integration;
};
