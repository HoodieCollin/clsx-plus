---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / useClsxPlus

# Function: useClsxPlus()

```ts
function useClsxPlus<Ident>(
  ident?,
  configInitFn?,
): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? "tw" : Ident>;
```

A React hook for creating a customized `clsxPlus` function.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
<tr>
<td>

`Ident` _extends_ `string`

</td>
<td>

`"tw"`

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

`ident`?

</td>
<td>

`null` | `Ident`

</td>
<td>

The identifier for the `clsxPlus` function. If `null` or `undefined`, the default identifier will be used.

</td>
</tr>
<tr>
<td>

`configInitFn`?

</td>
<td>

(`cfg`) => [`ClsxPlusConfig`](Class.ClsxPlusConfig.md)

</td>
<td>

A callback that will receive a editable configuration object as it's only argument.

</td>
</tr>
</table>

## Returns

[`ClsxPlusFn`](TypeAlias.ClsxPlusFn.md)\<\[[`StringConstant`](TypeAlias.StringConstant.md)\<`Ident`>] _extends_ \[`never`] ? `"tw"` : `Ident`>

an instance of the `clsxPlus` function with it's own configuration and separate cache.

## Example

```tsx
import { useClsxPlus, ClsxPlusConfig } from 'clsx-plus';

const MyConfig = new ClsxPlusConfig(true);

## Defined in

[src/index.ts:95](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/index.ts#L95)
```
