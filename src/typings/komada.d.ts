declare module 'komada' {
  import {
    Client,
    Collection,
    Message,
    MessageCollector,
    RichEmbed,
    Util,
    WebhookClient,
  } from 'discord.js';

  export class KomadaClient extends Client {
    public config: {};
    public funcs: {};
    public helpStructure: Map<any, any>;
    public commands: Collection<string, Command>;
    public aliases: Collection<any, any>;
    public commandInhibitors: Collection<any, any>;
    public messageMonitors: Collection<any, any>;
    public providers: Collection<any, any>;

    // missing some of the util methods
    public methods: {
      Collection: Collection<any, any>,
      Embed: RichEmbed,
      MessageCollector: MessageCollector,
      Webhook: WebhookClient,
    };

    public coreBaseDir: string;
    public clientBaseDir: string;
    public guildConfs: {};
    public configuration: {};
  }

  export class Command {
    public run: (client: Client, msg: Message, ...args: string[]) => any;
    public conf: {
      enabled: boolean,
      runIn: string[],
      aliases: string[],
      permLevel: number,
      botPerms: string[],
      requiredFuncs: string[],
      cooldown: number,
    };
    public help: {
      name: string,
      description: string,
      usage: string,
      usageDelim: string,
      extendedHelp: string,
    };
  }
}
