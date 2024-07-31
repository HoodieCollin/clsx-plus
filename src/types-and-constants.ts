/**
 * The types and constants used throughout the library.
 *
 * @module
 */

import { ClassValue } from 'clsx';
import { CssVars } from './css-vars';
import { InlineStyles } from './inline-styles';

/**
 * Constants used throughout the library.
 * @internal
 */
export namespace Constants {
  /**
   * A regular expression pattern for CSS variables.
   * @internal
   */
  export const CSS_VAR_PATTERN = /^--[a-z][a-z0-9-]*$/i;

  /**
   * A unique symbol used to identify CSS variable objects.
   * @internal
   */
  export const CSS_VARS = Symbol('CSS_VARS');

  /**
   * A unique symbol used to identify inline style objects.
   * @internal
   */
  export const INLINE_STYLES = Symbol('INLINE_STYLES');

  /**
   * The fallback identifier for the `clsxPlus` function if no identifier is provided by the user.
   * @internal
   */ export const FALLBACK_IDENT = 'tw';

  /**
   * The default identifier for the `clsxPlus` function.
   * @internal
   */
  export const DEFAULT_IDENT =
    process.env.CLSX_PLUS_DEFAULT_FN_IDENT || FALLBACK_IDENT;
}

/**
 * A special type that follows these rules based on the environment variable `CLSX_PLUS_DEFAULT_FN_IDENT`:
 * - If it is **_NOT_** declared, it will equal `typeof Constants.FALLBACK_IDENT`.
 * - If it is declared as a single string literal, it will equal `typeof Constants.DEFAULT_IDENT`.
 * - If it is declared as anything else, it will equal `never`.
 *
 * @internal
 */
export type DefaultIdent = [
  Extract<typeof process.env.CLSX_PLUS_DEFAULT_FN_IDENT, undefined>
] extends [never]
  ? StringConstant<typeof Constants.DEFAULT_IDENT>
  : typeof Constants.FALLBACK_IDENT;

/**
 * A type that represents a CSS value.
 */
export type StyleValue = string | number | boolean | null | undefined;

/**
 * A more flexible type for defining CSS styles.
 */
export type StyleDeclaration = {
  [K in string & keyof CSSStyleDeclaration]?: StyleValue;
};

/**
 * An error type that is thrown when a value is not supported.
 */
export type UnsupportedValueError = Error & { value: any };

/**
 * A type that represents the return value of a `clsxPlus` function.
 */
export interface ReturnValue {
  (): string;
  toString(): string;
  className: string;
  style?: Record<string, string>;
}

/**
 * A type that represents the return value of a `clsxPlus` function used in the return value cache.
 *
 * @internal
 */
export type ReturnValueMeta = {
  since: number;
  ret: ReturnValue;
};

/**
 * A function that calculates a value based on the provided arguments.
 */
export type CalculationFn<A extends [any, ...any[]] = any> = (
  ...args: A
) => ClassValue | CssVars<any> | InlineStyles<any>;

/**
 * Metadata for a calculation function used in the deferred value cache.
 *
 * @internal
 */
export type CalculationFnMeta<F extends CalculationFn = any> = {
  since: number;
  args: Parameters<F>;
  ret: ClassValue | CssVars<any> | InlineStyles<any>;
};

/**
 * A function that checks if the arguments of a calculation function have changed.
 */
export type EqualityChecker<F extends CalculationFn = any> = (
  old: Parameters<F>,
  current: Parameters<F>
) => boolean;

/**
 * Taken from https://stackoverflow.com/a/50375286
 *
 * credit to [jcalz](https://stackoverflow.com/users/2887218/jcalz)
 *
 * @internal
 */
export type UnionToIntersection<U> = (
  U extends any ? (x: U) => void : never
) extends (x: infer I) => void
  ? I
  : never;

/**
 * A type that ensures the input is an _exact_ string constant. Union types will result in `never`.
 *
 * @internal
 */
export type StringConstant<Str> = [UnionToIntersection<Str>] extends [never]
  ? never
  : Str extends string
  ? string extends Str
    ? never
    : Str
  : never;
