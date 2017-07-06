const DiscordJSIntegration = require('./libs/discord.js');

class AkairoIntegration extends DiscordJSIntegration {
  getCommands() {
    return this.client.commandHandler.modules.map(AkairoIntegration.formatCommand);
  }

  getCommand(id) {
    return AkairoIntegration.formatCommand(this.client.commandHandler.modules.get(id));
  }

  static formatCommand(command) {
    return {
      name: command.id,
      description: command.description,
      aliases: command.aliases,
    };
  }
}

module.exports = AkairoIntegration;
