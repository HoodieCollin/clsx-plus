[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / CacheKeyBuilder

# Class: CacheKeyBuilder

**`Internal`**

A utility class for building cache keys from a sequence of exotic values.

## Contents

- [Constructors](#constructors)
  - [new CacheKeyBuilder()](#new-cachekeybuilder)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [Defined in](#defined-in)
- [Methods](#methods)
  - [add()](#add)
    - [Parameters](#parameters-1)
    - [Returns](#returns-1)
    - [Defined in](#defined-in-1)
  - [finalize()](#finalize)
    - [Returns](#returns-2)
    - [Defined in](#defined-in-2)

## Constructors

### new CacheKeyBuilder()

```ts
new CacheKeyBuilder(...items): CacheKeyBuilder
```

Create a new instance of `CacheKeyBuilder`. If any values are provided, they will be added to the cache key.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

...`items`

</td>
<td>

`any`\[]

</td>
</tr>
</table>

#### Returns

[`CacheKeyBuilder`](Class.CacheKeyBuilder.md)

#### Defined in

[src/cache.ts:136](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/cache.ts#L136)

## Methods

### add()

```ts
add(value): void
```

Add a value to the cache key.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`value`

</td>
<td>

`unknown`

</td>
</tr>
</table>

#### Returns

`void`

#### Defined in

[src/cache.ts:147](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/cache.ts#L147)

---

### finalize()

```ts
finalize(): string
```

Create the final cache key.

#### Returns

`string`

The cache key as a string.

#### Defined in

[src/cache.ts:201](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/cache.ts#L201)
