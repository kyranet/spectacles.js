import { Client } from 'discord.js';
import komada = require('komada');

import { IFormattedCommand } from '../../../interfaces/IFormattedCommand';
import DiscordJSIntegration from '../Integration';

export default class KomadaIntegration extends DiscordJSIntegration {
  /**
   * Format a Komada command.
   * @param {Command} c A Komada command.
   * @returns {FormattedCommand}
   */
  public static formatCommand(c: komada.Command): IFormattedCommand {
    return {
      aliases: c.conf.aliases,
      description: c.help.description,
      name: c.help.name,
    };
  }

  public client: komada.KomadaClient;

  constructor(client: komada.KomadaClient, options = {}) {
    super(client, options);

    this.client = client;

    if (client.readyTimestamp) this.setCommands();
    else client.once('ready', () => this.setCommands());

    // TODO: automatically de/register commands when hot loaded/unloaded
  }

  public getCommands() {
    return this.client.commands.map(KomadaIntegration.formatCommand);
  }

  public getCommand(name: string) {
    return KomadaIntegration.formatCommand(this.client.commands.get(name));
  }
}
