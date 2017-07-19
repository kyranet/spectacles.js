import { Collection } from 'discord.js';
import { Command, CommandGroup, CommandoClient } from 'discord.js-commando';
import { Options as RedisOptions } from 'redis';
import { IFormattedCommand } from '../../../interfaces/IFormattedCommand';
import DiscordJSIntegration from '../Integration';

/**
 * The Commando-Spectacles integration.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends DiscordJSIntegration
 */
export default class CommandoIntegration extends DiscordJSIntegration {

  public client: CommandoClient;

  constructor(client: CommandoClient, options: RedisOptions) {
    super(client, options);

    this.client = client;

    this.client.on('commandRegister', (command: Command) => {
      this.setCommand(command);
    });

    this.client.on('commandReregister', (newC: Command) => {
      this.setCommand(newC);
    });

    this.client.on('commandUnregister', (command: Command) => {
      this.unsetCommand(command);
    });

    this.client.on('groupRegister', (group: CommandGroup) => {
      this.setCommands(group.commands.array());
    });
  }

  public getCommands() {
    return this.client.registry.commands.array();
  }
}
