import { Client } from 'discord.js';

import Integration from '../../interfaces/Integration';
import Cache from './Cache';

/**
 * The Discord.js-Spectacles integration.
 * @param {Client} client
 * @param {Object} [options={}]
 * @extends Integration
 */
export default abstract class DiscordJSIntegration extends Integration {
  public abstract client: Client;

  constructor(client: Client, options = {}) {
    super(new Cache(client, options));
  }
}
