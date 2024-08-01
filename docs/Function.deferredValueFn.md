---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / deferredValueFn

# Function: deferredValueFn()

```ts
function deferredValueFn<A>(
  config,
  args,
  fn,
  equalityChecker?,
): DeferredValue<A>;
```

**`Internal`**

Creates a new instance of the `DeferredValue` class.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`A` _extends_ \[`any`, `...any[]`]

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

`config`

</td>
<td>

[`ClsxPlusConfig`](Class.ClsxPlusConfig.md)

</td>
<td>

The configuration object containing the cache and other settings

</td>
</tr>
<tr>
<td>

`args`

</td>
<td>

`A`

</td>
<td>

The arguments to pass to the calculation function

</td>
</tr>
<tr>
<td>

`fn`

</td>
<td>

[`CalculationFn`](TypeAlias.CalculationFn.md)\<`A`>

</td>
<td>

The calculation function to call

</td>
</tr>
<tr>
<td>

`equalityChecker`?

</td>
<td>

[`EqualityChecker`](TypeAlias.EqualityChecker.md)\<[`CalculationFn`](TypeAlias.CalculationFn.md)\<`A`>>

</td>
<td>

An optional function to check if the arguments have changed

</td>
</tr>
</table>

## Returns

[`DeferredValue`](Class.DeferredValue.md)\<`A`>

A new instance of the `DeferredValue` class

## Defined in

[src/deferred-value.ts:86](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/deferred-value.ts#L86)
