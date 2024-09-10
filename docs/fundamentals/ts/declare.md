# declare

```ts
declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}
```
