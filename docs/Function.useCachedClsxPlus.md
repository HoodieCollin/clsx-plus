---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / useCachedClsxPlus

# Function: useCachedClsxPlus()

```ts
function useCachedClsxPlus<Ident>(
  ident?,
  options?,
): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? "tw" : Ident>;
```

A React hook for creating a `clsxPlus` function with caching automatically enabled.

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

`options`?

</td>
<td>

`object`

</td>
<td>

An object containing options for the cache. All values are in milliseconds. Each option defaults to `1000`.

</td>
</tr>
<tr>
<td>

`options.deferredValueInterval`?

</td>
<td>

`number`

</td>
<td>

‐

</td>
</tr>
<tr>
<td>

`options.deferredValueMaxAge`?

</td>
<td>

`number`

</td>
<td>

‐

</td>
</tr>
<tr>
<td>

`options.returnValueInterval`?

</td>
<td>

`number`

</td>
<td>

‐

</td>
</tr>
<tr>
<td>

`options.returnValueMaxAge`?

</td>
<td>

`number`

</td>
<td>

‐

</td>
</tr>
</table>

## Returns

[`ClsxPlusFn`](TypeAlias.ClsxPlusFn.md)\<\[[`StringConstant`](TypeAlias.StringConstant.md)\<`Ident`>] _extends_ \[`never`] ? `"tw"` : `Ident`>

an instance of the `clsxPlus` function with a separate cache that is automatically enabled.

## Defined in

[src/index.ts:123](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/index.ts#L123)
