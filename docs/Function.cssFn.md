[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / cssFn

# Function: cssFn()

```ts
function cssFn<T>(strings, ...values): InlineStyles<T>;
```

**`Internal`**

Create a map of inline styles parsed from a template string. The template string should be a CSS-like syntax.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
<tr>
<td>

`T` _extends_ `string`

</td>
<td>

`never`

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

`strings`

</td>
<td>

`TemplateStringsArray`

</td>
</tr>
<tr>
<td>

...`values`

</td>
<td>

`unknown`\[]

</td>
</tr>
</table>

## Returns

[`InlineStyles`](TypeAlias.InlineStyles.md)\<`T`>

## Defined in

[src/inline-styles.ts:21](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/inline-styles.ts#L21)
