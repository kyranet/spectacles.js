import { Command, CommandGroup, CommandoClient } from 'discord.js-commando';
import { IFormattedCommand } from '../../../types/FormattedCommand';
import DiscordJSIntegration from '../Integration';

/**
 * The Commando-Spectacles integration.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends DiscordJSIntegration
 */
export default class CommandoIntegration extends DiscordJSIntegration {
  /**
   * Format a command.
   * @param {Command} command
   * @returns {FormattedCommand}
   */
  public static formatCommand(command: Command): IFormattedCommand {
    return {
      aliases: command.aliases,
      description: command.description,
      name: command.name,
    };
  }

  public client: CommandoClient;

  constructor(client: CommandoClient, options = {}) {
    super(client, options);

    this.client = client;

    this.client.on('commandRegister', (command: Command) => {
      this.setCommand(CommandoIntegration.formatCommand(command));
    });

    this.client.on('commandReregister', (newC: Command) => {
      this.setCommand(CommandoIntegration.formatCommand(newC));
    });

    this.client.on('commandUnregister', (command: Command) => {
      this.unsetCommand(CommandoIntegration.formatCommand(command));
    });

    this.client.on('groupRegister', (group: CommandGroup) => {
      this.setCommands(group.commands.map(CommandoIntegration.formatCommand));
    });
  }

  public getCommands() {
    return this.client.registry.commands.map(CommandoIntegration.formatCommand);
  }

  public getCommand(name: string) {
    return CommandoIntegration.formatCommand(this.client.registry.commands.get(name));
  }

}
