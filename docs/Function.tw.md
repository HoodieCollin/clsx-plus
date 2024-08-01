---
layout: docs
sidebar: true
---

[**clsx-plus**](README.md) • **Docs**

---

[clsx-plus](README.md) / tw

# Function: tw()

The default `clsxPlus` function with the default identifier and configuration.

## Example

```tsx
import tw from "clsx-plus";

export function MyComponent() {
  return <div className={tw`text-red-500 bg-blue-500`}>Hello, world!</div>;
}
```

## tw(strings, items)

```ts
function tw(strings, ...items): ReturnValue;
```

The tag template literal function that generates a class name string

### Parameters

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

...`items`

</td>
<td>

`unknown`\[]

</td>
</tr>
</table>

### Returns

[`ReturnValue`](Interface.ReturnValue.md)

### Example

```tsx
import tw from "clsx-plus";

export function MyComponent() {
  return <div className={tw`text-red-500 bg-blue-500`}>Hello, world!</div>;
}
```

### Defined in

[src/index.ts:73](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/index.ts#L73)

## tw(cb)

```ts
function tw(cb): ReturnValue;
```

A callback-based alternative signature allowing for on-the-fly renaming of the function without needing to adjust the import.

### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`cb`

</td>
<td>

(`cx`) => [`ReturnValue`](Interface.ReturnValue.md)

</td>
</tr>
</table>

### Returns

[`ReturnValue`](Interface.ReturnValue.md)

### Example

```tsx
import tw from "clsx-plus";

export function MyComponent() {
  return <div className={tw`text-red-500 bg-blue-500`}>Hello, world!</div>;
}
```

### Defined in

[src/index.ts:73](https://github.com/HoodieCollin/clsx-plus/blob/6e1806c1d3df5a0086bcfb605a74045d54bc746a/src/index.ts#L73)
