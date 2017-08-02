declare module 'komada' {
  import {
    Client,
    Collection,
    Message,
    MessageCollector,
    RichEmbed,
    Util,
    WebhookClient,
    escapeMarkdown,
    splitMessage,
    User,
  } from 'discord.js';

  export class KomadaClient extends Client {
    public config: {};
    public funcs: {};
    public helpStructure: Map<any, any>;
    public commands: Collection<string, Command>;
    public aliases: Collection<any, any>;
    public commandInhibitors: Collection<any, any>;
    public commandFinalizers: Collection<any, any>;
    public messageMonitors: Collection<any, any>;
    public eventHandlers: Collection<any, any>;
    public providers: Collection<any, any>;

    public methods: {
      Collection: Collection<any, any>,
      Embed: RichEmbed,
      MessageCollector: MessageCollector,
      Webhook: WebhookClient,
      escapeMarkdown: escapeMarkdown,
      splitMessage: splitMessage,
    };

    public coreBaseDir: string;
    public clientBaseDir: string;
    public settings: {};

    get invite: string;
    get owner: User;

    public login: (token: string) => void;
    public sweepCommandMessages: (lifetime: number) => number;
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
      requiredSettings: string[],
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
