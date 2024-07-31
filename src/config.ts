import { isEqual } from 'lodash';
import { Cache } from './cache';
import { CalculationFnMeta, ReturnValueMeta } from './types-and-constants';

export class ClsxPlusConfig {
  constructor(
    public enableTailwindMerge = false,
    public enableReturnValueCache = false,
    public enableDeferredValueCache = false,
    public defaultEqualityChecker = isEqual
  ) {}

  public readonly ReturnValueCache = new Cache<ReturnValueMeta>();

  public readonly DeferredValueCache = new Cache<CalculationFnMeta>();
}

export type ClsxPlusConfigType = InstanceType<typeof ClsxPlusConfig>;

export const GlobalClsxPlusConfig = new ClsxPlusConfig();

export default GlobalClsxPlusConfig;
