import { ClassValue } from 'clsx';
import { CssVars } from './css-vars';
import { InlineStyles } from './inline-styles';

// /**
//  * This is how you can declare the default identifier specified in the environment variables.
//  */
// declare global {
//   namespace NodeJS {
//     interface ProcessEnv {
//       /**
//        * The default identifier to use for the when
//        */
//       readonly CLSX_PLUS_DEFAULT_FN_IDENT: 'tailwind';
//     }
//   }
// }

export namespace Constants {
  export const CSS_VAR_PATTERN = /^--[a-z][a-z0-9-]*$/i;

  export const CSS_VARS = Symbol('CSS_VARS');

  export const INLINE_STYLES = Symbol('INLINE_STYLES');

  export const FALLBACK_IDENT = 'tw';

  export const DEFAULT_IDENT =
    process.env.CLSX_PLUS_DEFAULT_FN_IDENT || FALLBACK_IDENT;
}

/**
 * A special type that follows these rules based on the environment variable `CLSX_PLUS_DEFAULT_FN_IDENT`:
 * - If it is **_NOT_** declared, it will equal `typeof Constants.FALLBACK_IDENT`.
 * - If it is declared as a single string literal, it will equal `typeof Constants.DEFAULT_IDENT`.
 * - If it is declared as anything else, it will equal `never`.
 */
export type DefaultIdent = [
  Extract<typeof process.env.CLSX_PLUS_DEFAULT_FN_IDENT, undefined>
] extends [never]
  ? StringConstant<typeof Constants.DEFAULT_IDENT>
  : typeof Constants.FALLBACK_IDENT;

export type StyleValue = string | number | boolean | null | undefined;

export type StyleDeclaration = {
  [K in string & keyof CSSStyleDeclaration]?: StyleValue;
};

export type UnsupportedValueError = Error & { value: any };

export interface ReturnValue {
  (): string;
  toString(): string;
  className: string;
  style?: Record<string, string>;
}

export type ReturnValueMeta = {
  since: number;
  ret: ReturnValue;
};

export type CalculationFn<A extends [any, ...any[]] = any> = (
  ...args: A
) => ClassValue | CssVars<any> | InlineStyles<any>;

export type CalculationFnMeta<F extends CalculationFn = any> = {
  since: number;
  args: Parameters<F>;
  ret: ClassValue | CssVars<any> | InlineStyles<any>;
};

export type EqualityChecker<F extends CalculationFn = any> = (
  old: Parameters<F>,
  current: Parameters<F>
) => boolean;

/**
 * Taken from https://stackoverflow.com/a/50375286
 *
 * credit to [jcalz](https://stackoverflow.com/users/2887218/jcalz)
 */
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer I
) => void
  ? I
  : never;

/**
 * A type that ensures the input is an _exact_ string constant. Union types will result in `never`.
 */
export type StringConstant<Str> = [UnionToIntersection<Str>] extends [never]
  ? never
  : Str extends string
  ? string extends Str
    ? never
    : Str
  : never;
