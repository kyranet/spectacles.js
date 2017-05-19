const DiscordJSIntegration = require('./libs/discord.js');

class CommandoIntegration extends DiscordJSIntegration {
  getCommands() {
    return this.client.registry.commands.map(c => CommandoIntegration.formatCommand(c));
  }

  getCommand(name) {
    return CommandoIntegration.formatCommand(this.client.registry.commands.get(name));
  }

  static formatCommand(command = {}) {
    return {
      name: command.name,
      description: command.description,
      aliases: command.aliases,
    };
  }
}

module.exports = CommandoIntegration;
