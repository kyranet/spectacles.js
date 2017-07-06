const DiscordJSIntegration = require('./libs/discord.js');

class AkairoIntegration extends DiscordJSIntegration {
  constructor(client, options = {}) {
    super(client, options);

    this.client.commandHandler.on('add', (command) => {
      this.setCommand(command.name);
    });

    this.client.commandHandler.on('remove', (command) => {
      this.unsetCommand(command.name);
    });
  }

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
