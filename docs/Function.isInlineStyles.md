[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / isInlineStyles

# Function: isInlineStyles()

```ts
function isInlineStyles<T>(arg): arg is InlineStyles<T>;
```

**`Internal`**

A type guard that checks if a value is an `InlineStyles` object.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T` _extends_ `string`

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

`arg`

</td>
<td>

`any`

</td>
<td>

The value to check.

</td>
</tr>
</table>

## Returns

`arg is InlineStyles<T>`

`true` if the value is an `InlineStyles` object, otherwise `false`.

## Defined in

[src/inline-styles.ts:88](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/inline-styles.ts#L88)
