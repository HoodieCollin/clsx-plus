---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / CssVars

# Type Alias: CssVars\<T>

```ts
type CssVars<T>: [T] extends [never] ? never : Map<`--${T}`, string> & object;
```

A type that represents a collection of CSS variables. The keys should **_NOT_** include the `--` prefix _(it will be added automatically)_.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
<tr>
<td>

`T` _extends_ `string`

</td>
<td>

The keys of the CSS variables.

</td>
</tr>
</table>

## Defined in

[src/css-vars.ts:9](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/css-vars.ts#L9)
