---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / EqualityChecker

# Type Alias: EqualityChecker()\<F>

```ts
type EqualityChecker<F>: (old, current) => boolean;
```

A function that checks if the arguments of a calculation function have changed.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
<tr>
<td>

`F` _extends_ [`CalculationFn`](TypeAlias.CalculationFn.md)

</td>
<td>

`any`

</td>
</tr>
</table>

## Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`old`

</td>
<td>

`Parameters`\<`F`>

</td>
</tr>
<tr>
<td>

`current`

</td>
<td>

`Parameters`\<`F`>

</td>
</tr>
</table>

## Returns

`boolean`

## Defined in

[src/types-and-constants.ts:129](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/types-and-constants.ts#L129)