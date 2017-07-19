declare module 'redis' {
  export interface RedisClient extends NodeJS.EventEmitter {
    hdelAsync: (key: string) => Promise<number>;
    hmsetAsync: (key: string, data: Object) => Promise<string>;
    multi: () => Multi;
  }

  export interface Multi extends NodeJS.EventEmitter {
    hmset: (key: string, data: Object) => string;
    execAsync: () => any[];
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
    rename_commands?: Object;
    tls?: Object;
    prefix?: string;
    retry_strategy?: (data: { attempt: number, total_retry_time: number, error: Error, times_connected: number }) => number | Error | any;
  }
}
