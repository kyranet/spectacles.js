import { AkairoClient, Command } from 'discord-akairo';
import { IFormattedCommand } from '../../../types/FormattedCommand';
import DiscordJSIntegration from '../Integration';

export default class AkairoIntegration extends DiscordJSIntegration {
  public static formatCommand(command: Command): IFormattedCommand {
    return {
      aliases: command.aliases,
      description: command.description,
      name: command.id,
    };
  }

  public readonly client: AkairoClient;

  constructor(client: AkairoClient, options = {}) {
    super(client, options);

    this.client.commandHandler.on('add', (command: Command) => {
      this.setCommand(AkairoIntegration.formatCommand(command));
    });

    this.client.commandHandler.on('remove', (command: Command) => {
      this.unsetCommand(AkairoIntegration.formatCommand(command));
    });
  }

  public getCommands() {
    return this.client.commandHandler.modules.map(AkairoIntegration.formatCommand);
  }

  public getCommand(id: string) {
    return AkairoIntegration.formatCommand(this.client.commandHandler.modules.get(id));
  }
}
