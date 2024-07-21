import { ClassValue } from 'clsx';
import { CxConfigType } from './config';
import {
  CalculationFn,
  CalculationFnMeta,
  EqualityChecker,
} from './types-and-constants';

export class DeferredValue<F extends CalculationFn = any> {
  constructor(
    private readonly _config: CxConfigType,
    public readonly args: Parameters<NoInfer<F>>,
    public readonly fn: F,
    public readonly equalityChecker?: EqualityChecker<NoInfer<F>>
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

    let entry: CalculationFnMeta<F> | undefined =
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

export type BoundDeferredValueFn = <F extends CalculationFn>(
  args: Parameters<NoInfer<F>>,
  fn: F,
  equalityChecker?: EqualityChecker<NoInfer<F>>
) => DeferredValue<F>;

export function deferredValueFn<F extends CalculationFn>(
  config: CxConfigType,
  args: Parameters<NoInfer<F>>,
  fn: F,
  equalityChecker?: EqualityChecker<NoInfer<F>>
): DeferredValue<F> {
  return new DeferredValue(config, args, fn, equalityChecker);
}
