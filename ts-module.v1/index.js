import { twiceTheFoo } from "./javascript/twiceTheFoo";
const TSModule = { };

TSModule.foo = () => {
  return 42;
}
TSModule.twiceTheFoo = twiceTheFoo;

export default TSModule;