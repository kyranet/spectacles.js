require('dotenv').config({ path: 'test/.env' });
const spectacles = require('../dist/index');
const discord = require('discord.js');
const akairo = require('discord-akairo');
const commando = require('discord.js-commando');
const semver = require('semver');
const test = require('ava');

test('discord.js', async (t) => {
  const client = new discord.Client();
  const Spec = spectacles('discord.js');

  Spec.prototype.getCommands = () => [
    {
      name: 'test',
      description: 'test command',
      aliases: ['t'],
    },
    {
      name: 'other test',
      description: 'other test command',
      aliases: ['o'],
    },
  ];

  Spec.prototype.getCommand = (name) => {
    switch (name) {
      case 'test':
        return {
          name: 'test',
          description: 'test command',
          aliases: ['t'],
        };
      case 'other test':
        return {
          name: 'other test',
          description: 'other test command',
          aliases: ['o'],
        };
      default:
        return null;
    }
  };

  const tacles = new Spec(client);

  await client.login(process.env.DISCORD_TOKEN);
  await tacles.setCommands();
  await tacles.setCommand('other test');

  return t.pass();
});

test.skip('akairo', async (t) => {
  const client = new akairo.AkairoClient({
    commandDirectory: './test/akairoCommands',
  });
  client.build();
  client.loadAll();

  const Spec = spectacles('discord.js', 'akairo');
  // eslint-disable-next-line no-unused-vars
  const tacles = new Spec(client);
  await client.login(process.env.DISCORD_TOKEN);

  return t.pass();
});

test('commando', async (t) => {
  if (semver.lt(process.version, '7.6.0')) return t.skip();

  const client = new commando.Client();
  const Spec = spectacles('discord.js', 'commando');
  // eslint-disable-next-line no-unused-vars
  const tacles = new Spec(client);
  client.registry.registerDefaults();

  await client.login(process.env.DISCORD_TOKEN);
  return t.pass();
});
