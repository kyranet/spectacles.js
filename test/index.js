require('dotenv').config({ path: 'test/.env' });
const spectacles = require('../src/index');
const discord = require('discord.js');

describe('discord.js', function() {
  let client;
  before(function() {
    client = new discord.Client();
    return client.login(process.env.DISCORD_TOKEN);
  });

  it('initializes', function() {
    return spectacles('discord.js', client);
  });
});
