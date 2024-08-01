---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / varsFn

# Function: varsFn()

```ts
function varsFn<T>(arg): CssVars<T>;
```

**`Internal`**

Create a map of CSS variables from an object.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T` _extends_ `string`

</td>
</tr>
</table>

## Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`arg`

</td>
<td>

`Record`\<`T`, [`StyleValue`](TypeAlias.StyleValue.md)>

</td>
<td>

An object containing the CSS variables to set.

</td>
</tr>
</table>

## Returns

[`CssVars`](TypeAlias.CssVars.md)\<`T`>

A map of CSS variables.

## Defined in

[src/css-vars.ts:22](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/css-vars.ts#L22)
