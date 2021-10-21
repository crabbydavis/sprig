import { registerPlugin } from '@capacitor/core';

import type { SprigPlugin } from './definitions';

const Sprig = registerPlugin<SprigPlugin>('Sprig', {
  web: () => import('./web').then(m => new m.SprigWeb()),
});

export * from './definitions';
export { Sprig };
