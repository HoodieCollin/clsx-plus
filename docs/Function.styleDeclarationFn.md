[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / styleDeclarationFn

# Function: styleDeclarationFn()

```ts
function styleDeclarationFn<T>(styles): InlineStyles<keyof T & string>;
```

**`Internal`**

Create a map of inline styles from an object.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T` _extends_ [`StyleDeclaration`](TypeAlias.StyleDeclaration.md)

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

`styles`

</td>
<td>

`T`

</td>
<td>

An object extending `CSSStyleDeclaration` that contains the styles to set.

</td>
</tr>
</table>

## Returns

[`InlineStyles`](TypeAlias.InlineStyles.md)\<keyof `T` & `string`>

A map of inline styles.

## Defined in

[src/inline-styles.ts:103](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/inline-styles.ts#L103)
