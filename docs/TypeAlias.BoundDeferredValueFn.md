[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / BoundDeferredValueFn

# Type Alias: BoundDeferredValueFn()

```ts
type BoundDeferredValueFn: <A>(args, fn, equalityChecker?) => DeferredValue<A>;
```

A function that creates a new instance of the `DeferredValue` class with `config` already bound.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
<tr>
<td>

`A` _extends_ \[`any`, `...any[]`]

</td>
<td>

The argument to pass to the calculation function

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

`args`

</td>
<td>

`A`

</td>
</tr>
<tr>
<td>

`fn`

</td>
<td>

[`CalculationFn`](TypeAlias.CalculationFn.md)\<`A`>

</td>
</tr>
<tr>
<td>

`equalityChecker`?

</td>
<td>

[`EqualityChecker`](TypeAlias.EqualityChecker.md)\<[`CalculationFn`](TypeAlias.CalculationFn.md)\<`A`>>

</td>
</tr>
</table>

## Returns

[`DeferredValue`](Class.DeferredValue.md)\<`A`>

## Defined in

[src/deferred-value.ts:68](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/deferred-value.ts#L68)
