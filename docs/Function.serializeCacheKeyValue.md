[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / serializeCacheKeyValue

# Function: serializeCacheKeyValue()

```ts
function serializeCacheKeyValue(value): string;
```

**`Internal`**

A utility function for serializing cache key values. This function uses `JSON.stringify` to serialize the value. If the value is a function, it will be serialized via `.toString()`.

## Parameters

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

`unknown`

</td>
<td>

The cache key value to serialize.

</td>
</tr>
</table>

## Returns

`string`

The serialized cache key value.

## Defined in

[src/utilities.ts:99](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/utilities.ts#L99)
