import { registerPlugin } from '@capacitor/core';
const Sprig = registerPlugin('Sprig', {
// web: () => import('./web').then(m => new m.SprigWeb()),
});
export * from './definitions';
export { Sprig };
//# sourceMappingURL=index.js.map