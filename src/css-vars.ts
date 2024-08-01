import { Constants, StyleValue } from './types-and-constants';

/**
 * A type that represents a collection of CSS variables. The keys should _**NOT**_ include the `--` prefix _(it will be added automatically)_.
 *
 * @category Types and Constants
 * @template T - The keys of the CSS variables.
 */
export type CssVars<T extends string> = [T] extends [never]
  ? never
  : Map<`--${T}`, string> & { [Constants.CSS_VARS]: true };

/**
 * Create a map of CSS variables from an object.
 *
 * @internal
 * @category Implementation Details
 *
 * @param arg - An object containing the CSS variables to set.
 * @returns A map of CSS variables.
 */
export function varsFn<T extends string>(
  arg: Record<T, StyleValue>
): CssVars<T> {
  const ret = createCssVars<T>();
  const keys = Object.keys(arg) as T[];

  for (const key of keys.sort()) {
    const varName = `--${key}` as const;

    ret.set(varName, `${arg[key]}`);
  }

  return ret;
}

/**
 * A utility function for creating a map of CSS variables.
 *
 * @internal
 * @category Implementation Details
 *
 * @returns A map of CSS variables.
 */
export function createCssVars<T extends string = never>(): CssVars<T> {
  const ret = new Map() as CssVars<T>;

  Object.defineProperty(ret, Constants.CSS_VARS, {
    value: true,
    enumerable: false,
  });

  return ret;
}

/**
 * A type guard that checks if a value is a `CssVars` object.
 *
 * @internal
 * @category Implementation Details
 *
 * @param arg - The value to check.
 * @returns `true` if the value is a `CssVars` object, otherwise `false`.
 */
export function isCssVars<T extends string>(arg: any): arg is CssVars<T> {
  return arg && arg[Constants.CSS_VARS] === true;
}
