import { isEqual } from 'lodash';
import { Cache } from './cache';
import { CalculationFnMeta, ReturnValueMeta } from './types-and-constants';

/**
 * A configuration object for the `clsxPlus` function.
 *
 * @category Secondary Entry Points
 */
export class ClsxPlusConfig {
  public tailwindMergeEnabled = false;
  public defaultEqualityChecker = isEqual;
  public returnValueCacheEnabled = false;
  public deferredValueCacheEnabled = false;

  constructor({
    tailwindMerge,
    equalityChecker,
    returnValueCache,
    deferredValueCache,
  }: {
    tailwindMerge?: boolean;
    equalityChecker?: typeof isEqual;
    returnValueCache?:
      | boolean
      | {
          maxAge?: number;
          pruneInterval?: number;
        };
    deferredValueCache?:
      | boolean
      | {
          maxAge?: number;
          pruneInterval?: number;
        };
  } = {}) {
    if (tailwindMerge !== undefined) {
      this.tailwindMergeEnabled = tailwindMerge;
    }

    if (equalityChecker) {
      this.defaultEqualityChecker = equalityChecker;
    }

    if (returnValueCache === true) {
      this.returnValueCacheEnabled = true;
      this.ReturnValueCache.cacheMaxAge = 1000;
      this.ReturnValueCache.pruneInterval = 1000;
    }

    if (deferredValueCache === true) {
      this.deferredValueCacheEnabled = true;
      this.DeferredValueCache.cacheMaxAge = 1000;
      this.DeferredValueCache.pruneInterval = 1000;
    }
  }

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
 *
 * @category Variables
 */
export const GlobalClsxPlusConfig = new ClsxPlusConfig();

export default GlobalClsxPlusConfig;
