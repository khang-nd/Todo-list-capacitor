import { registerPlugin } from '@capacitor/core';

import type { LocalePlugin } from './definitions';

const Locale = registerPlugin<LocalePlugin>('Locale', {
  web: () => import('./web').then(m => new m.LocaleWeb()),
});

export * from './definitions';
export { Locale };
