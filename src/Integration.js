/* eslint-disable class-methods-use-this */
const EventEmitter = require('events');

function err(name) {
  throw new Error(`The ${name} method has not been implemented.`);
}

class Integration extends EventEmitter {

  setCommands() {
    err('setCommands');
  }

  setCommand() {
    err('setCommand');
  }

  setPresence() {
    err('setPresence');
  }

  setMe() {
    err('setMe');
  }
}

module.exports = Integration;
