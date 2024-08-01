import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CacheKeyBuilder } from './cache';
import GlobalConfig, { ClsxPlusConfig } from './config';
import { isCssVars, varsFn } from './css-vars';
import {
  BoundDeferredValueFn,
  DeferredValue,
  deferredValueFn,
} from './deferred-value';
import { cssFn, isInlineStyles, styleDeclarationFn } from './inline-styles';
import {
  Constants,
  DefaultIdent,
  ReturnValue,
  StringConstant,
  StyleValue,
} from './types-and-constants';
import { joinParts } from './utilities';

/**
 * The main export of the library. It is a tag template literal function with a callback-based alternative signature.
 *
 * When using the callback-based signature, the callback will receive itself as the only argument. This allows on the fly renaming of the function without needing to adjust the import.
 *
 * @category Types and Constants
 * @property `css` - A function that creates inline styles. Use this if you prefer to declare your inline styles using a CSS-like syntax.
 * @property `vars` - A function that creates CSS variables. Use this if you prefer to declare your CSS variables as an object.
 * @property `styles` - A function that creates inline styles. Use this if you prefer to declare your inline styles as a `CSSStyleDeclaration`.
 * @property `defer` - A function that creates a placeholder and tracks a list of arguments and a callback to be evaluated lazily. These are only recalculated if their arguments change.
 * @property `Config` - The editable configuration object for the current instance of the function.
 */
export type ClsxPlusFn<Ident extends string> = {
  /**
   * The tag template literal function that generates a class name string
   */
  (strings: TemplateStringsArray, ...items: unknown[]): ReturnValue;
  /**
   * A callback-based alternative signature allowing for on-the-fly renaming of the function without needing to adjust the import.
   */
  (cb: (cx: ClsxPlusFn<StringConstant<Ident>>) => ReturnValue): ReturnValue;
  /**
   * A function that creates inline styles. Use this if you prefer to declare your inline styles using a CSS-like syntax.
   */
  css: typeof cssFn;
  /**
   * A function that creates CSS variables. Use this if you prefer to declare your CSS variables as an `object`.
   */
  vars: typeof varsFn;
  /**
   * A function that creates inline styles. Use this if you prefer to declare your inline styles as a `CSSStyleDeclaration`.
   */
  styles: typeof styleDeclarationFn;
  /**
   * A function that creates a placeholder and tracks a list of arguments and a callback to be evaluated lazily. These are only recalculated if their arguments change.
   */
  defer: BoundDeferredValueFn;
  /**
   * The editable configuration object for the current instance of the function.
   */
  Config: ClsxPlusConfig;
} & {
  /**
   * A reference to itself with the configured identifier as the key.
   */
  [K in StringConstant<Ident>]: ClsxPlusFn<StringConstant<Ident>>;
};

/**
 * Creates a new instance of the `clsxPlus` function, optionally with a custom identifier and configuration.
 *
 * @category Secondary Entry Points
 *
 * @param ident - Override the default identifier for the function.
 * @param configOrConfigInitFn - Provide a custom configuration or a callback that will receive a editable configuration object as it's only argument.
 * @returns A new instance of the `clsxPlus` function.
 */
export function createClsxPlusFn<Ident extends string>(
  ident?: Ident | null,
  configOrConfigInitFn:
    | ClsxPlusConfig
    | ((cfg: ClsxPlusConfig) => void) = GlobalConfig
): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? DefaultIdent : Ident> {
  type IdentArg = [StringConstant<Ident>] extends [never]
    ? DefaultIdent
    : Ident;

  if (!ident) {
    ident = Constants.DEFAULT_IDENT as Ident;
  }

  let config: ClsxPlusConfig;

  if (typeof configOrConfigInitFn === 'function') {
    config = new ClsxPlusConfig();
    configOrConfigInitFn(config);
  } else {
    config = configOrConfigInitFn;
  }

  function processInput(strings: TemplateStringsArray, ...items: unknown[]) {
    const style: Map<string, StyleValue> = new Map();
    const extra: string[] = [];

    for (let item of items) {
      let nilExtra = true;

      if (isCssVars(item)) {
        for (const [key, value] of item) {
          style.set(key, value);
        }
      } else if (isInlineStyles(item)) {
        for (const [key, value] of item) {
          style.set(key, value);
        }

        const embeddedVars = item[Constants.CSS_VARS];

        if (isCssVars(embeddedVars)) {
          for (const [key, value] of embeddedVars) {
            style.set(key, value);
          }
        }
      } else {
        nilExtra = false;
      }

      if (nilExtra) {
        extra.push('');
      } else if (item instanceof DeferredValue) {
        extra.push(clsx(item.call()));
      } else {
        extra.push(clsx(item as ClassValue));
      }
    }

    let className = joinParts(strings, extra);

    if (config.tailwindMergeEnabled) {
      className = twMerge(className);
    }

    function toString() {
      return className;
    }

    return Object.defineProperties(toString, {
      toString: { value: toString },
      className: { value: className, enumerable: true },
      style: {
        value: style.size ? Object.fromEntries(style) : undefined,
        enumerable: true,
      },
    }) as ReturnValue;
  }

  function taggedTemplateHandler(
    strings: TemplateStringsArray,
    ...items: unknown[]
  ): ReturnValue {
    if (!config.returnValueCacheEnabled) {
      return processInput(strings, ...items);
    }

    const cacheKey = new CacheKeyBuilder([strings, items]).finalize();
    let entry = config.ReturnValueCache.get(cacheKey);
    let ret: ReturnValue;

    if (entry) {
      ret = entry.ret;
      entry.since = Date.now();
    } else {
      ret = processInput(strings, ...items);
      entry = { since: Date.now(), ret };
    }

    config.ReturnValueCache.set(cacheKey, entry);

    return ret;
  }

  function callbackArgumentHandler(
    cb: (fn: ClsxPlusFn<IdentArg>) => ReturnValue
  ): ReturnValue {
    return cb(fn);
  }

  const fn = function ClsxPlusFn(...args: unknown[]): ReturnValue {
    if (args.length === 1 && typeof args[0] === 'function') {
      return callbackArgumentHandler(
        args[0] as (cx: ClsxPlusFn<IdentArg>) => ReturnValue
      );
    }

    const [strings, ...values] = args;

    if (!Array.isArray(strings) || 'raw' in strings === false) {
      throw new Error(
        `\`${ident}\` must be used as a template literal tag or as a higher-order function.`
      );
    }

    return taggedTemplateHandler(strings as TemplateStringsArray, ...values);
  } as ClsxPlusFn<IdentArg>;

  return Object.defineProperties(fn, {
    name: { value: ident },
    [ident]: { value: fn },
    css: { value: cssFn },
    vars: { value: varsFn },
    styles: { value: styleDeclarationFn },
    defer: { value: deferredValueFn.bind(fn, config) },
    Config: { value: config },
  });
}
