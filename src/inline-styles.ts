import { createCssVars, CssVars } from './css-vars';
import { Constants, StyleDeclaration, StyleValue } from './types-and-constants';
import { serializeStyleValue } from './utilities';

/**
 * A type that represents a collection of inline styles.
 *
 * @category Types and Constants
 */
export type InlineStyles<T extends string> = Map<string, StyleValue> & {
  [Constants.INLINE_STYLES]: true;
  [Constants.CSS_VARS]?: CssVars<T>;
};

/**
 * Create a map of inline styles parsed from a template string. The template string should be a CSS-like syntax.
 *
 * @internal
 * @category Implementation Details
 */
export function cssFn<T extends string = never>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): InlineStyles<T> {
  const inline = createInlineStyles<T>();
  const vars = createCssVars<T>();
  let hasVars = false;

  for (let i = 0; i < strings.length; i++) {
    const rules = strings[i].split(';');

    for (let j = 0; j < rules.length; j++) {
      const [key, value] = rules[j].split(':').map((s) => s.trim());

      let dst: Map<string, any> = inline;

      if (Constants.CSS_VAR_PATTERN.test(key)) {
        dst = vars;
        hasVars = true;
      }

      // if last rule in this chunk, we can allow an empty value and supply a value from the values array
      if (!values.length || j < rules.length - 1) {
        dst.set(key, value);
      } else {
        dst.set(key, serializeStyleValue(values.shift()));
      }
    }
  }

  if (hasVars) {
    inline[Constants.CSS_VARS] = vars as CssVars<T>;
  }

  return inline;
}

/**
 * A utility function for creating a map of inline styles.
 *
 * @internal
 * @category Implementation Details
 *
 * @returns A new instance of `InlineStyles`.
 */
export function createInlineStyles<
  T extends string = never
>(): InlineStyles<T> {
  const ret = new Map() as InlineStyles<T>;

  Object.defineProperty(ret, Constants.INLINE_STYLES, {
    value: true,
    enumerable: false,
  });

  return ret;
}

/**
 * A type guard that checks if a value is an `InlineStyles` object.
 *
 * @internal
 * @category Implementation Details
 *
 * @param arg - The value to check.
 * @returns `true` if the value is an `InlineStyles` object, otherwise `false`.
 */
export function isInlineStyles<T extends string>(
  arg: any
): arg is InlineStyles<T> {
  return arg && arg[Constants.INLINE_STYLES] === true;
}

/**
 * Create a map of inline styles from an object.
 *
 * @internal
 * @category Implementation Details
 *
 * @param styles - An object extending `CSSStyleDeclaration` that contains the styles to set.
 * @returns A map of inline styles.
 */
export function styleDeclarationFn<T extends StyleDeclaration>(
  styles: T
): InlineStyles<keyof T & string> {
  const ret = createInlineStyles<keyof T & string>();

  for (const key in styles) {
    ret.set(key, styles[key] as any);
  }

  return ret;
}
