import { isEqual } from 'lodash';
import { Cache } from './cache';
import { CalculationFnMeta, ReturnValueMeta } from './types-and-constants';

export class CxConfig {
  constructor(
    public enableTailwindMerge = false,
    public enableReturnValueCache = false,
    public enableDeferredValueCache = false,
    public defaultEqualityChecker = isEqual
  ) {}

  public readonly ReturnValueCache = new Cache<ReturnValueMeta>();

  public readonly DeferredValueCache = new Cache<CalculationFnMeta>();
}

export type CxConfigType = InstanceType<typeof CxConfig>;

export const GlobalCxConfig = new CxConfig();

export default GlobalCxConfig;
