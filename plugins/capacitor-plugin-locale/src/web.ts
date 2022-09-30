import { WebPlugin } from '@capacitor/core';

import type { LocalePlugin } from './definitions';

export class LocaleWeb extends WebPlugin implements LocalePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
