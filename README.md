Testing migrating of a react-native library with typing declaration(`d.ts`) to typescript library.

Contents:
  - ts-module: base module with js and type declration (`d.ts`)
  - ts-module.v1: one function (`twiceTheFoo`) implemented in typescript and referenced from both `index.js` and `index.d.ts`
  - ts-module.v2: one function (`twiceTheFoo`) implemented in typescript and referenced from `index.js` *but not* from `index.d.ts` (this does fail)
  - tsapp: typescript app using ts-module (tested running and `tsc --noEmit` to see if we get type errors)
  - jsapp: non typescript rn app 0.68.2 (tested running
  - jsappold: non typescript rn app 0.65.1 (from Aug 2021) (tested running)

```
npx react-native init tsapp --version react-native@0.68.2 --template react-native-template-typescript

yarn add file:../ts-module
tsc --noEmit
```

Create js only versions, to see what happens in js only code:
```
npx react-native init jsapp --version 0.68.2
yarn add file:../ts-module.v1
tsc --noEmit
```

Create js only versions, to see what happens in js only code:
```
npx react-native init jsapp --version 0.65.1
yarn add file:../ts-module.v1
tsc --noEmit
```

