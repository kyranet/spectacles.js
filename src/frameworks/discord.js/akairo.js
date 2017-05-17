class Akairo {
  constructor(client) {
    this.client = client;
  }

  getCommands() {
    return this.client.commandHandler.modules.map(c => Akairo._formatCommand(c));
  }

  getCommand(id) {
    return Akairo._formatCommand(this.client.commandHandler.modules.get(id));
  }

  static _formatCommand(command) {
    return {
      name: command.id,
      aliases: command.aliases,
      description: command.description,
    };
  }
}

module.exports = Akairo;
