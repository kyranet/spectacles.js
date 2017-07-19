declare module 'redis' {
  export class RedisClient extends NodeJS.EventEmitter {
    public hdelAsync: (key: string) => Promise<number>;
    public hmsetAsync: (key: string, data: object) => Promise<string>;
    public multi: () => Multi;
  }

  export class Multi extends NodeJS.EventEmitter {
    public hmset: (key: string, data: object) => string;
    public execAsync: () => any[];
  }

  export interface Options {
    host?: string;
    port?: number;
    path?: string;
    url?: string;
    parser?: 'javascript' | 'hiredis';
    string_numbers?: boolean;
    return_buffers?: boolean;
    detect_buffers?: boolean;
    socket_keepalive?: boolean;
    no_ready_check?: boolean;
    enable_offline_queue?: boolean;
    retry_unfulfilled_commands?: boolean;
    password?: string;
    db?: string;
    family?: string;
    disable_resubscribing?: boolean;
    rename_commands?: object;
    tls?: object;
    prefix?: string;
    retry_strategy?: (data: {
      attempt: number,
      total_retry_time: number,
      error: Error,
      times_connected: number,
    }) => number | Error | any;
  }
}
