---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / DeferredValue

# Class: DeferredValue\<A>

A class that represents a deferred value. This is used to cache the return value of a calculation function.

## Contents

- [Type Parameters](#type-parameters)
- [Constructors](#constructors)
  - [new DeferredValue()](#new-deferredvalue)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [See](#see)
    - [Defined in](#defined-in)
- [Properties](#properties)
- [Methods](#methods)
  - [call()](#call)
    - [Returns](#returns-1)
    - [Defined in](#defined-in-1)

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

## Constructors

### new DeferredValue()

```ts
new DeferredValue<A>(
   _config,
   args,
   fn,
equalityChecker?): DeferredValue<A>
```

**`Internal`**

Creates a new instance of the `DeferredValue` class.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`_config`

</td>
<td>

[`ClsxPlusConfig`](Class.ClsxPlusConfig.md)

</td>
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

#### Returns

[`DeferredValue`](Class.DeferredValue.md)\<`A`>

#### See

deferredValueFn

#### Defined in

[src/deferred-value.ts:22](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/deferred-value.ts#L22)

## Properties

<table>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Defined in</th>
</tr>
<tr>
<td>

`args`

</td>
<td>

`readonly`

</td>
<td>

`A`

</td>
<td>

[src/deferred-value.ts:24](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/deferred-value.ts#L24)

</td>
</tr>
<tr>
<td>

`equalityChecker?`

</td>
<td>

`readonly`

</td>
<td>

[`EqualityChecker`](TypeAlias.EqualityChecker.md)\<[`CalculationFn`](TypeAlias.CalculationFn.md)\<`A`>>

</td>
<td>

[src/deferred-value.ts:26](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/deferred-value.ts#L26)

</td>
</tr>
<tr>
<td>

`fn`

</td>
<td>

`readonly`

</td>
<td>

[`CalculationFn`](TypeAlias.CalculationFn.md)\<`A`>

</td>
<td>

[src/deferred-value.ts:25](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/deferred-value.ts#L25)

</td>
</tr>
</table>

## Methods

### call()

```ts
call(): ClassValue
```

Evaluates the calculation function unless the cache is enabled and the arguments have not changed and a cached value exists.

#### Returns

`ClassValue`

The return value of the calculation function

#### Defined in

[src/deferred-value.ts:34](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/deferred-value.ts#L34)
