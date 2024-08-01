[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / serializeStyleValue

# Function: serializeStyleValue()

```ts
function serializeStyleValue(value): string;
```

**`Internal`**

Convert a value to a string suitable for use in a CSS declaration.

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

The value to serialize.

</td>
</tr>
</table>

## Returns

`string`

The serialized value.

## Throws

`UnsupportedValueError` - If the value type is not supported.

## Defined in

[src/utilities.ts:51](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/utilities.ts#L51)
