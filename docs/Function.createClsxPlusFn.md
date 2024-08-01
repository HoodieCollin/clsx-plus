[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / createClsxPlusFn

# Function: createClsxPlusFn()

```ts
function createClsxPlusFn<Ident>(
  ident?,
  configOrConfigInitFn?,
): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? DefaultIdent : Ident>;
```

Creates a new instance of the `clsxPlus` function, optionally with a custom identifier and configuration.

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

## Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
<tr>
<td>

`ident`?

</td>
<td>

`null` | `Ident`

</td>
<td>

`undefined`

</td>
<td>

Override the default identifier for the function.

</td>
</tr>
<tr>
<td>

`configOrConfigInitFn`?

</td>
<td>

[`ClsxPlusConfig`](Class.ClsxPlusConfig.md) | (`cfg`) => `void`

</td>
<td>

`GlobalConfig`

</td>
<td>

Provide a custom configuration or a callback that will receive a editable configuration object as it's only argument.

</td>
</tr>
</table>

## Returns

[`ClsxPlusFn`](TypeAlias.ClsxPlusFn.md)\<\[[`StringConstant`](TypeAlias.StringConstant.md)\<`Ident`>] _extends_ \[`never`] ? [`DefaultIdent`](TypeAlias.DefaultIdent.md) : `Ident`>

A new instance of the `clsxPlus` function.

## Defined in

[src/fn-factory.ts:78](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/fn-factory.ts#L78)
