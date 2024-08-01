---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / UnionToIntersection

# Type Alias: UnionToIntersection\<U>

```ts
type UnionToIntersection<U>: U extends any ? (x) => void : never extends (x) => void ? I : never;
```

**`Internal`**

Taken from [https://stackoverflow.com/a/50375286](https://stackoverflow.com/a/50375286)

credit to [jcalz](https://stackoverflow.com/users/2887218/jcalz)

## Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`U`

</td>
</tr>
</table>

## Defined in

[src/types-and-constants.ts:142](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/types-and-constants.ts#L142)
