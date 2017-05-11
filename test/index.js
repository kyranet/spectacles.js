require('dotenv').config({ path: 'test/.env' });
const spectacles = require('../src/index');
const discord = require('discord.js');

process.on('unhandledRejection', console.error);

describe('discord.js', function() {
  let client;
  before(function() {
    client = new discord.Client();
    return client.login(process.env.DISCORD_TOKEN);
  });

  it('initializes', function(done) {
    spectacles('discord.js', client).once('ready', () => done());
  });
});
