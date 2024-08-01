---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / ClsxPlusFn

# Type Alias: ClsxPlusFn\<Ident>

```ts
type ClsxPlusFn<Ident>: (strings, ...items) => ReturnValue(cb) => ReturnValue & { [K in StringConstant<Ident>]: ClsxPlusFn<StringConstant<Ident>> };
```

The main export of the library. It is a tag template literal function with a callback-based alternative signature.

When using the callback-based signature, the callback will receive itself as the only argument. This allows on the fly renaming of the function without needing to adjust the import.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`Ident` _extends_ `string`

</td>
</tr>
</table>

## Defined in

[src/fn-factory.ts:33](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/fn-factory.ts#L33)
