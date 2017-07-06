const DiscordJSIntegration = require('./libs/discord.js');

class KomadaIntegration extends DiscordJSIntegration {
  constructor(client, options = {}) {
    super(client, options);

    if (client.readyTimestamp) this.setCommands();
    else client.once('ready', () => this.setCommands());

    // TODO: automatically de/register commands when hot loaded/unloaded
  }

  getCommands() {
    return this.client.commands.map(KomadaIntegration.formatCommand);
  }

  getCommand(name) {
    return this.client.commands.get(name);
  }

  /**
   * Format a Komada command.
   * @param {Command} c A Komada command.
   * @returns {FormattedCommand}
   */
  static formatCommand(c) {
    return {
      name: c.help.name,
      description: c.help.description,
      aliases: c.conf.aliases,
    };
  }
}

module.exports = KomadaIntegration;
