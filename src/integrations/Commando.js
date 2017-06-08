const DiscordJSIntegration = require('./libs/discord.js');

/**
 * The Commando-Spectacles integration.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends DiscordJSIntegration
 */
class CommandoIntegration extends DiscordJSIntegration {
  constructor(client, options = {}) {
    super(client, options);

    this.client.on('commandRegister', (command) => {
      this.setCommand(command.name);
    });

    this.client.on('commandReregister', (newC) => {
      this.setCommand(newC.name);
    });

    this.client.on('commandUnregister', (command) => {
      this.unsetCommand(command.name);
    });

    this.client.on('groupRegister', (group) => {
      this.setCommands(group.commands.map(CommandoIntegration.formatCommand));
    });
  }

  getCommands() {
    return this.client.registry.commands.map(CommandoIntegration.formatCommand);
  }

  getCommand(name) {
    return CommandoIntegration.formatCommand(this.client.registry.commands.get(name));
  }

  /**
   * Format a command.
   * @param {Command} command
   * @returns {FormattedCommand}
   */
  static formatCommand(command = {}) {
    return {
      name: command.name,
      description: command.description,
      aliases: command.aliases,
    };
  }
}

module.exports = CommandoIntegration;
