[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / StringConstant

# Type Alias: StringConstant\<Str>

```ts
type StringConstant<Str>: [UnionToIntersection<Str>] extends [never] ? never : Str extends string ? string extends Str ? never : Str : never;
```

**`Internal`**

A type that ensures the input is an _exact_ string constant. Union types will result in `never`.

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`Str`

</td>
</tr>
</table>

## Defined in

[src/types-and-constants.ts:154](https://github.com/HoodieCollin/clsx-plus/blob/4d55252443bab37590ad84a6e45f55cb4343cd0f/src/types-and-constants.ts#L154)
