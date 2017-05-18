const DiscordJSIntegration = require('./libs/discord.js');

class CommandoIntegration extends DiscordJSIntegration {
  setCommands() {
    return this.getCommands().map(c => this.redis.client.hmsetAsync(c.name, c));
  }

  setCommand(name) {
    return this.redis.client.hmsetAsync('commands', this.getCommand(name));
  }

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
