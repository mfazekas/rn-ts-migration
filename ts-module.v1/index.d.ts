declare module 'ts-module';

import type { twiceTheFoo as _twiceTheFoo } from './javascript/twiceTheFoo';

declare namespace TSModule {
  function foo(): number;
  
  export const twiceTheFoo = _twiceTheFoo;
}

export default TSModule;