import { Constants } from './types-and-constants';

export type CssVars<T extends string> = [T] extends [never]
  ? never
  : Map<`--${T}`, string> & { [Constants.CSS_VARS]: true };

export function varsFn<T extends string>(arg: Record<T, any>): CssVars<T> {
  const ret = createCssVars<T>();
  const keys = Object.keys(arg) as T[];

  for (const key of keys.sort()) {
    const varName = `--${key}` as const;

    ret.set(varName, `${arg[key]}`);
  }

  return ret;
}

export function createCssVars<T extends string = never>(): CssVars<T> {
  const ret = new Map() as CssVars<T>;

  Object.defineProperty(ret, Constants.CSS_VARS, {
    value: true,
    enumerable: false,
  });

  return ret;
}

export function isCssVars<T extends string>(arg: any): arg is CssVars<T> {
  return arg && arg[Constants.CSS_VARS] === true;
}
