[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / CalculationFn

# Type Alias: CalculationFn()\<A>

```ts
type CalculationFn<A>: (...args) => ClassValue | CssVars<any> | InlineStyles<any>;
```

A function that calculates a value based on the provided arguments.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
<tr>
<td>

`A` _extends_ \[`any`, `...any[]`]

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

...`args`

</td>
<td>

`A`

</td>
</tr>
</table>

## Returns

`ClassValue` | [`CssVars`](TypeAlias.CssVars.md)\<`any`> | [`InlineStyles`](TypeAlias.InlineStyles.md)\<`any`>

## Defined in

[src/types-and-constants.ts:108](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/types-and-constants.ts#L108)
