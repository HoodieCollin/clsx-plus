import { ClassValue } from 'clsx';
import { CssVars } from './css-vars';
import { InlineStyles } from './inline-styles';

export namespace Constants {
  export const CSS_VAR_PATTERN = /^--[a-z][a-z0-9-]*$/i;

  export const CSS_VARS = Symbol('CSS_VARS');

  export const INLINE_STYLES = Symbol('INLINE_STYLES');
}

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
