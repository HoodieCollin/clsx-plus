import { ClassValue } from 'clsx';
import { ClsxPlusConfigType } from './config';
import {
  CalculationFn,
  CalculationFnMeta,
  EqualityChecker,
} from './types-and-constants';

export class DeferredValue<A extends [any, ...any[]]> {
  constructor(
    private readonly _config: ClsxPlusConfigType,
    public readonly args: A,
    public readonly fn: CalculationFn<A>,
    public readonly equalityChecker?: EqualityChecker<CalculationFn<A>>
  ) {}

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

export type BoundDeferredValueFn = <A extends [any, ...any[]]>(
  args: A,
  fn: CalculationFn<A>,
  equalityChecker?: EqualityChecker<CalculationFn<A>>
) => DeferredValue<A>;

export function deferredValueFn<A extends [any, ...any[]]>(
  config: ClsxPlusConfigType,
  args: A,
  fn: CalculationFn<A>,
  equalityChecker?: EqualityChecker<CalculationFn<A>>
): DeferredValue<A> {
  return new DeferredValue(config, args, fn, equalityChecker);
}
