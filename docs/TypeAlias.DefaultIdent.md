---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / DefaultIdent

# Type Alias: DefaultIdent

```ts
type DefaultIdent: [Extract<typeof process.env.CLSX_PLUS_DEFAULT_FN_IDENT, undefined>] extends [never] ? StringConstant<typeof DEFAULT_IDENT> : typeof FALLBACK_IDENT;
```

**`Internal`**

A special type that follows these rules based on the environment variable `CLSX_PLUS_DEFAULT_FN_IDENT`:

- If it is **_NOT_** declared, it will equal `typeof Constants.FALLBACK_IDENT`.
- If it is declared as a single string literal, it will equal `typeof Constants.DEFAULT_IDENT`.
- If it is declared as anything else, it will equal `never`.

## Defined in

[src/types-and-constants.ts:51](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/types-and-constants.ts#L51)
