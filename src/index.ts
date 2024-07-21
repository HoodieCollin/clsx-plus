import { useState } from 'react';
import { CxConfig, CxConfigType } from './config';
import { createCxFn } from './fn-factory';
export { default as GlobalConfig } from './config';

export { createCxFn, CxConfig };
export type { CxConfigType };

export const cx = createCxFn();

export default cx;

export function useCxFn(initConfig?: (cfg: CxConfigType) => CxConfigType) {
  return useState(() => {
    let cfg = new CxConfig();

    if (initConfig) {
      cfg = initConfig(cfg);
    }

    return createCxFn(cfg);
  })[0];
}

export function useMemoizedCxFn({
  returnValueMaxAge = 1000,
  returnValueInterval = 800,
  deferredValueMaxAge = 1000,
  deferredValueInterval = 800,
}: {
  returnValueMaxAge?: number;
  returnValueInterval?: number;
  deferredValueMaxAge?: number;
  deferredValueInterval?: number;
}) {
  return useCxFn((cfg) => {
    cfg.enableReturnValueCache = true;
    cfg.ReturnValueCache.cacheMaxAge = returnValueMaxAge;
    cfg.ReturnValueCache.pruneInterval = returnValueInterval;

    cfg.enableDeferredValueCache = true;
    cfg.DeferredValueCache.cacheMaxAge = deferredValueMaxAge;
    cfg.DeferredValueCache.pruneInterval = deferredValueInterval;

    return cfg;
  });
}
