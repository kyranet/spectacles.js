const { Command } = require('discord-akairo');

class Ping extends Command {
  constructor() {
    super('ping', {
      aliases: ['p'],
      description: 'bong',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  exec(msg) {
    return msg.reply('pong');
  }
}

module.exports = Ping;
