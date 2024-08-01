---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / Cache

# Class: Cache\<T>

A simple cache that stores values based on a key and a timestamp.

## Contents

- [Type Parameters](#type-parameters)
- [Constructors](#constructors)
  - [new Cache()](#new-cache)
    - [Returns](#returns)
    - [Defined in](#defined-in)
- [Accessors](#accessors)
  - [cacheMaxAge](#cachemaxage)
    - [Parameters](#parameters)
    - [Returns](#returns-1)
    - [Defined in](#defined-in-1)
  - [pruneInterval](#pruneinterval)
    - [Parameters](#parameters-1)
    - [Returns](#returns-2)
    - [Defined in](#defined-in-2)
- [Methods](#methods)
  - [get()](#get)
    - [Parameters](#parameters-2)
    - [Returns](#returns-3)
    - [Defined in](#defined-in-3)
  - [pruneCache()](#prunecache)
    - [Returns](#returns-4)
    - [Defined in](#defined-in-4)
  - [set()](#set)
    - [Parameters](#parameters-3)
    - [Returns](#returns-5)
    - [Defined in](#defined-in-5)
  - [startPruner()](#startpruner)
    - [Returns](#returns-6)
    - [Defined in](#defined-in-6)
  - [stopPruner()](#stoppruner)
    - [Returns](#returns-7)
    - [Defined in](#defined-in-7)

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T` _extends_ `object`

</td>
</tr>
</table>

## Constructors

### new Cache()

```ts
new Cache<T>(): Cache<T>
```

#### Returns

[`Cache`](Class.Cache.md)\<`T`>

#### Defined in

[src/cache.ts:12](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L12)

## Accessors

### cacheMaxAge

```ts
get cacheMaxAge(): number
```

The maximum age of a value in the cache. If a value is older than this, they are eligible for pruning.

```ts
set cacheMaxAge(value): void
```

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

`number`

</td>
</tr>
</table>

#### Returns

`number`

#### Defined in

[src/cache.ts:23](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L23)

---

### pruneInterval

```ts
get pruneInterval(): number
```

The interval at which the cache is pruned. If a value is older than `cacheMaxAge`, it will be removed.

```ts
set pruneInterval(value): void
```

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

`number`

</td>
</tr>
</table>

#### Returns

`number`

#### Defined in

[src/cache.ts:46](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L46)

## Methods

### get()

```ts
get(key): undefined | T
```

Get a value from the cache.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
<td>

The key of the value to retrieve.

</td>
</tr>
</table>

#### Returns

`undefined` | `T`

The value if it exists, otherwise `undefined`.

#### Defined in

[src/cache.ts:111](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L111)

---

### pruneCache()

```ts
pruneCache(): void
```

Prune the cache immediately of values that are older than `cacheMaxAge`.

#### Returns

`void`

#### Defined in

[src/cache.ts:94](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L94)

---

### set()

```ts
set(key, value): void
```

Set a value in the cache.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
<td>

The key of the value to set

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`T`

</td>
<td>

The value to store in the cache.

</td>
</tr>
</table>

#### Returns

`void`

#### Defined in

[src/cache.ts:121](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L121)

---

### startPruner()

```ts
startPruner(): void
```

Manually start the cache pruner.

#### Returns

`void`

#### Defined in

[src/cache.ts:67](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L67)

---

### stopPruner()

```ts
stopPruner(): void
```

Manually stop the cache pruner.

#### Returns

`void`

#### Defined in

[src/cache.ts:84](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/cache.ts#L84)
