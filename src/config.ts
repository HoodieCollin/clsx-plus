import { isEqual } from 'lodash';
import { Cache } from './cache';
import { CalculationFnMeta, ReturnValueMeta } from './types-and-constants';

/**
 * A configuration object for the `clsxPlus` function.
 */
export class ClsxPlusConfig {
  constructor(
    public enableTailwindMerge = false,
    public enableReturnValueCache = false,
    public enableDeferredValueCache = false,
    public defaultEqualityChecker = isEqual
  ) {}

  /**
   * A cache for the return values of the `clsxPlus` function.
   */
  public ReturnValueCache = new Cache<ReturnValueMeta>();

  /**
   * A cache for the deferred values of the `clsxPlus` function.
   */
  public DeferredValueCache = new Cache<CalculationFnMeta>();
}

/**
 * The global configuration object for the `clsxPlus` function. This is used as the default configuration for all instances unless overridden.
 */
export const GlobalClsxPlusConfig = new ClsxPlusConfig();

export default GlobalClsxPlusConfig;
