import { WebPlugin } from '@capacitor/core';

import type { SprigPlugin } from './definitions';

export class SprigWeb extends WebPlugin implements SprigPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
