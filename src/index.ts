import { useState } from 'react';
import { ClsxPlusConfig, ClsxPlusConfigType } from './config';
import { createClsxPlusFn } from './fn-factory';
import { Constants, DefaultIdent } from './types-and-constants';
export { default as GlobalConfig } from './config';

export { createClsxPlusFn, ClsxPlusConfig as CxConfig };
export type { ClsxPlusConfigType as CxConfigType };

export default createClsxPlusFn(Constants.DEFAULT_IDENT as DefaultIdent);

export function useClsxPlusFn<Ident extends string = DefaultIdent>(
  ident?: Ident | null,
  initConfig?: (cfg: ClsxPlusConfigType) => ClsxPlusConfigType
) {
  return useState(() => {
    if (!ident) {
      ident = Constants.DEFAULT_IDENT as Ident;
    }

    let cfg = new ClsxPlusConfig();

    if (initConfig) {
      cfg = initConfig(cfg);
    }

    return createClsxPlusFn(ident, cfg);
  })[0];
}

export function useMemoizedCxFn<Ident extends string = DefaultIdent>(
  ident?: Ident | null,
  options?: {
    returnValueMaxAge?: number;
    returnValueInterval?: number;
    deferredValueMaxAge?: number;
    deferredValueInterval?: number;
  }
) {
  const {
    returnValueMaxAge = 1000,
    returnValueInterval = 1000,
    deferredValueMaxAge = 1000,
    deferredValueInterval = 1000,
  } = options ?? {};

  return useClsxPlusFn(ident, (cfg) => {
    cfg.enableReturnValueCache = true;
    cfg.ReturnValueCache.cacheMaxAge = returnValueMaxAge;
    cfg.ReturnValueCache.pruneInterval = returnValueInterval;

    cfg.enableDeferredValueCache = true;
    cfg.DeferredValueCache.cacheMaxAge = deferredValueMaxAge;
    cfg.DeferredValueCache.pruneInterval = deferredValueInterval;

    return cfg;
  });
}
