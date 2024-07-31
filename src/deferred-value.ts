import { ClassValue } from 'clsx';
import { ClsxPlusConfig } from './config';
import {
  CalculationFn,
  CalculationFnMeta,
  EqualityChecker,
} from './types-and-constants';

/**
 * A class that represents a deferred value. This is used to cache the return value of a calculation function.
 */
export class DeferredValue<A extends [any, ...any[]]> {
  /**
   * Creates a new instance of the `DeferredValue` class.
   *
   * @internal
   *
   * @see deferredValueFn
   */
  constructor(
    private readonly _config: ClsxPlusConfig,
    public readonly args: A,
    public readonly fn: CalculationFn<A>,
    public readonly equalityChecker?: EqualityChecker<CalculationFn<A>>
  ) {}

  /**
   * Evaluates the calculation function unless the cache is enabled and the arguments have not changed and a cached value exists.
   *
   * @returns The return value of the calculation function
   */
  call = (): ClassValue => {
    if (!this._config.enableDeferredValueCache) {
      return this.fn(...this.args);
    }

    const args = this.args;
    const fn = this.fn;
    const key = fn.toString();
    const equalityChecker =
      this.equalityChecker ?? this._config.defaultEqualityChecker;

    let entry: CalculationFnMeta<CalculationFn<A>> | undefined =
      this._config.DeferredValueCache.get(key);
    let ret: ClassValue;

    if (entry && equalityChecker(entry.args, args)) {
      ret = entry.ret;
      entry.since = Date.now();
    } else {
      ret = fn(...args);
      entry = { since: Date.now(), args, ret };
    }

    this._config.DeferredValueCache.set(key, entry);
    return ret;
  };
}

/**
 * A function that creates a new instance of the `DeferredValue` class with `config` already bound.
 *
 * @template A - The argument to pass to the calculation function
 */
export type BoundDeferredValueFn = <A extends [any, ...any[]]>(
  args: A,
  fn: CalculationFn<A>,
  equalityChecker?: EqualityChecker<CalculationFn<A>>
) => DeferredValue<A>;

/**
 * Creates a new instance of the `DeferredValue` class.
 *
 * @internal
 *
 * @param config - The configuration object containing the cache and other settings
 * @param args - The arguments to pass to the calculation function
 * @param fn - The calculation function to call
 * @param equalityChecker - An optional function to check if the arguments have changed
 * @returns A new instance of the `DeferredValue` class
 */
export function deferredValueFn<A extends [any, ...any[]]>(
  config: ClsxPlusConfig,
  args: A,
  fn: CalculationFn<A>,
  equalityChecker?: EqualityChecker<CalculationFn<A>>
): DeferredValue<A> {
  return new DeferredValue(config, args, fn, equalityChecker);
}
