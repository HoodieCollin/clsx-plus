---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / ClsxPlusConfig

# Class: ClsxPlusConfig

A configuration object for the `clsxPlus` function.

## Contents

- [Lang](#lang)
  - [defaultEqualityChecker()](#defaultequalitychecker)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [Example](#example)
    - [Defined in](#defined-in)
- [Other](#other)
  - [new ClsxPlusConfig()](#new-clsxplusconfig)
    - [Parameters](#parameters-1)
    - [Returns](#returns-1)
    - [Defined in](#defined-in-1)
  - [DeferredValueCache](#deferredvaluecache)
    - [Defined in](#defined-in-2)
  - [ReturnValueCache](#returnvaluecache)
    - [Defined in](#defined-in-3)
  - [deferredValueCacheEnabled](#deferredvaluecacheenabled)
    - [Defined in](#defined-in-4)
  - [returnValueCacheEnabled](#returnvaluecacheenabled)
    - [Defined in](#defined-in-5)
  - [tailwindMergeEnabled](#tailwindmergeenabled)
    - [Defined in](#defined-in-6)

## Lang

### defaultEqualityChecker()

```ts
defaultEqualityChecker: (value, other) => (boolean = isEqual);
```

Performs a deep comparison between two values to determine if they are
equivalent.

**Note:** This method supports comparing arrays, array buffers, booleans,
date objects, error objects, maps, numbers, `Object` objects, regexes,
sets, strings, symbols, and typed arrays. `Object` objects are compared
by their own, not inherited, enumerable properties. Functions and DOM
nodes are **not** supported.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
<td>

The value to compare.

</td>
</tr>
<tr>
<td>

`other`

</td>
<td>

`any`

</td>
<td>

The other value to compare.

</td>
</tr>
</table>

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

#### Example

```ts
var object = { user: "fred" };
var other = { user: "fred" };

_.isEqual(object, other);
// => true

object === other;
// => false
```

#### Defined in

[src/config.ts:12](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L12)

## Other

### new ClsxPlusConfig()

```ts
new ClsxPlusConfig(__namedParameters): ClsxPlusConfig
```

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`__namedParameters`

</td>
<td>

`object`

</td>
</tr>
<tr>
<td>

`__namedParameters.deferredValueCache`?

</td>
<td>

`boolean` | `object`

</td>
</tr>
<tr>
<td>

`__namedParameters.equalityChecker`?

</td>
<td>

(`value`, `other`) => `boolean`

</td>
</tr>
<tr>
<td>

`__namedParameters.returnValueCache`?

</td>
<td>

`boolean` | `object`

</td>
</tr>
<tr>
<td>

`__namedParameters.tailwindMerge`?

</td>
<td>

`boolean`

</td>
</tr>
</table>

#### Returns

[`ClsxPlusConfig`](Class.ClsxPlusConfig.md)

#### Defined in

[src/config.ts:16](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L16)

---

### DeferredValueCache

```ts
DeferredValueCache: Cache<CalculationFnMeta>;
```

A cache for the deferred values of the `clsxPlus` function.

#### Defined in

[src/config.ts:66](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L66)

---

### ReturnValueCache

```ts
ReturnValueCache: Cache<ReturnValueMeta>;
```

A cache for the return values of the `clsxPlus` function.

#### Defined in

[src/config.ts:61](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L61)

---

### deferredValueCacheEnabled

```ts
deferredValueCacheEnabled: boolean = false;
```

#### Defined in

[src/config.ts:14](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L14)

---

### returnValueCacheEnabled

```ts
returnValueCacheEnabled: boolean = false;
```

#### Defined in

[src/config.ts:13](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L13)

---

### tailwindMergeEnabled

```ts
tailwindMergeEnabled: boolean = false;
```

#### Defined in

[src/config.ts:11](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/config.ts#L11)
