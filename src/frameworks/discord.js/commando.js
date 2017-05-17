class Commando {
  constructor(client) {
    this.client = client;
  }

  getCommands() {
    return this.client.registry.commands.map(c => Commando._formatCommand(c));
  }

  getCommand(name) {
    return Commando._formatCommand(this.client.registry.commands.get(name));
  }

  static _formatCommand(command) {
    return {
      name: command.name,
      aliases: command.aliases,
      description: command.description,
    };
  }
}

module.exports = Commando;
