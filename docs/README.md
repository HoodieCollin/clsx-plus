**clsx-plus** • **Docs**

---

# clsx-plus

A utility for generating class names with ease.

## Contents

- [Main Entry Point](#main-entry-point)
- [Secondary Entry Points](#secondary-entry-points)
- [React Hooks](#react-hooks)
- [Variables](#variables)
- [Types and Constants](#types-and-constants)
- [Implementation Details](#implementation-details)

## Main Entry Point

The entry point for the library. This is the default export and the main function that is used to generate class names.

| Function             | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| [tw](Function.tw.md) | The tag template literal function that generates a class name string |

## Secondary Entry Points

These items are used to create new instances of the `clsxPlus` function with custom configurations or identifiers.

| Class, Function                                  | Description                                                                                               |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [ClsxPlusConfig](Class.ClsxPlusConfig.md)        | A configuration object for the `clsxPlus` function.                                                       |
| [createClsxPlusFn](Function.createClsxPlusFn.md) | Creates a new instance of the `clsxPlus` function, optionally with a custom identifier and configuration. |

## React Hooks

Generally speaking, you should able to use the default export and ignore the hooks provided in
this library. However, if you need to leverage the caching system and want to isolate the
cache for a specific component, you can use the `useClsxPlus` or `useCachedClsxPlus` hook.

| Function                                           | Description                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [useCachedClsxPlus](Function.useCachedClsxPlus.md) | A React hook for creating a `clsxPlus` function with caching automatically enabled. |
| [useClsxPlus](Function.useClsxPlus.md)             | A React hook for creating a customized `clsxPlus` function.                         |

## Variables

Global variables that can be modified to change the behavior of the library.

| Variable                                                 | Description                                                                                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [GlobalClsxPlusConfig](Variable.GlobalClsxPlusConfig.md) | The global configuration object for the `clsxPlus` function. This is used as the default configuration for all instances unless overridden. |

## Types and Constants

For the most part, these types and constants are used internally by the library. However, there
are a few types that are exported for use cases when you need to extend the library or create
custom hooks.

| Namespace, Interface, Type alias                            | Description                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Constants](Namespace.Constants.md)                         | Constants used throughout the library.                                                                                                                                                                                                                                                                                                               |
| [ReturnValue](Interface.ReturnValue.md)                     | -                                                                                                                                                                                                                                                                                                                                                    |
| [BoundDeferredValueFn](TypeAlias.BoundDeferredValueFn.md)   | A function that creates a new instance of the `DeferredValue` class with `config` already bound.                                                                                                                                                                                                                                                     |
| [CalculationFn](TypeAlias.CalculationFn.md)                 | A function that calculates a value based on the provided arguments.                                                                                                                                                                                                                                                                                  |
| [CalculationFnMeta](TypeAlias.CalculationFnMeta.md)         | Metadata for a calculation function used in the deferred value cache.                                                                                                                                                                                                                                                                                |
| [ClsxPlusFn](TypeAlias.ClsxPlusFn.md)                       | The main export of the library. It is a tag template literal function with a callback-based alternative signature.                                                                                                                                                                                                                                   |
| [CssVars](TypeAlias.CssVars.md)                             | A type that represents a collection of CSS variables. The keys should **_NOT_** include the `--` prefix _(it will be added automatically)_.                                                                                                                                                                                                          |
| [DefaultIdent](TypeAlias.DefaultIdent.md)                   | A special type that follows these rules based on the environment variable `CLSX_PLUS_DEFAULT_FN_IDENT`: - If it is **_NOT_** declared, it will equal `typeof Constants.FALLBACK_IDENT`. - If it is declared as a single string literal, it will equal `typeof Constants.DEFAULT_IDENT`. - If it is declared as anything else, it will equal `never`. |
| [EqualityChecker](TypeAlias.EqualityChecker.md)             | A function that checks if the arguments of a calculation function have changed.                                                                                                                                                                                                                                                                      |
| [InlineStyles](TypeAlias.InlineStyles.md)                   | A type that represents a collection of inline styles.                                                                                                                                                                                                                                                                                                |
| [ReturnValueMeta](TypeAlias.ReturnValueMeta.md)             | A type that represents the return value of a `clsxPlus` function used in the return value cache.                                                                                                                                                                                                                                                     |
| [StringConstant](TypeAlias.StringConstant.md)               | A type that ensures the input is an _exact_ string constant. Union types will result in `never`.                                                                                                                                                                                                                                                     |
| [StyleDeclaration](TypeAlias.StyleDeclaration.md)           | A more flexible type for defining CSS styles.                                                                                                                                                                                                                                                                                                        |
| [StyleValue](TypeAlias.StyleValue.md)                       | A type that represents a CSS value.                                                                                                                                                                                                                                                                                                                  |
| [UnionToIntersection](TypeAlias.UnionToIntersection.md)     | Taken from [https://stackoverflow.com/a/50375286](https://stackoverflow.com/a/50375286)                                                                                                                                                                                                                                                              |
| [UnsupportedValueError](TypeAlias.UnsupportedValueError.md) | An error type that is thrown when a value is not supported.                                                                                                                                                                                                                                                                                          |

## Implementation Details

These items are used internally by the library and are not intended for public use. They are
exported for documentation and type-checking purposes only.

| Class, Function                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cache](Class.Cache.md)                                      | A simple cache that stores values based on a key and a timestamp.                                                                                                                     |
| [CacheKeyBuilder](Class.CacheKeyBuilder.md)                  | A utility class for building cache keys from a sequence of exotic values.                                                                                                             |
| [DeferredValue](Class.DeferredValue.md)                      | A class that represents a deferred value. This is used to cache the return value of a calculation function.                                                                           |
| [createCssVars](Function.createCssVars.md)                   | A utility function for creating a map of CSS variables.                                                                                                                               |
| [createInlineStyles](Function.createInlineStyles.md)         | A utility function for creating a map of inline styles.                                                                                                                               |
| [cssFn](Function.cssFn.md)                                   | Create a map of inline styles parsed from a template string. The template string should be a CSS-like syntax.                                                                         |
| [deferredValueFn](Function.deferredValueFn.md)               | Creates a new instance of the `DeferredValue` class.                                                                                                                                  |
| [isCssVars](Function.isCssVars.md)                           | A type guard that checks if a value is a `CssVars` object.                                                                                                                            |
| [isInlineStyles](Function.isInlineStyles.md)                 | A type guard that checks if a value is an `InlineStyles` object.                                                                                                                      |
| [joinParts](Function.joinParts.md)                           | A utility function for joining template strings and extra values.                                                                                                                     |
| [serializeCacheKeyValue](Function.serializeCacheKeyValue.md) | A utility function for serializing cache key values. This function uses `JSON.stringify` to serialize the value. If the value is a function, it will be serialized via `.toString()`. |
| [serializeStyleValue](Function.serializeStyleValue.md)       | Convert a value to a string suitable for use in a CSS declaration.                                                                                                                    |
| [styleDeclarationFn](Function.styleDeclarationFn.md)         | Create a map of inline styles from an object.                                                                                                                                         |
| [varsFn](Function.varsFn.md)                                 | Create a map of CSS variables from an object.                                                                                                                                         |
