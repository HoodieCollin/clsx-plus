/**
 * A utility for generating class names with ease.
 *
 * @module clsx-plus
 */

/// <reference types="node" />

import { useState } from 'react';
import { ClsxPlusConfig } from './config';
import { createClsxPlusFn } from './fn-factory';
import { Constants, DefaultIdent } from './types-and-constants';

/**
 * @document ../how-to-override-default-ident.md
 */

export * from './cache';
export * from './config';
export * from './css-vars';
export * from './deferred-value';
export * from './fn-factory';
export * from './inline-styles';
export * from './types-and-constants';
export * from './utilities';

export type * from './deferred-value';
export type * from './fn-factory';
export type * from './types-and-constants';

/**
 * The default `clsxPlus` function with the default identifier and configuration.
 */
export default createClsxPlusFn(Constants.DEFAULT_IDENT as DefaultIdent);

/**
 * A React hook for creating a customized `clsxPlus` function.
 *
 * @param ident - The identifier for the `clsxPlus` function. If `null` or `undefined`, the default identifier will be used.
 * @param configInitFn - A callback that will receive a editable configuration object as it's only argument.
 * @returns an instance of the `clsxPlus` function with it's own configuration and separate cache.
 */
export function useClsxPlus<Ident extends string = DefaultIdent>(
  ident?: Ident | null,
  configInitFn?: (cfg: ClsxPlusConfig) => ClsxPlusConfig
) {
  return useState(() => {
    if (!ident) {
      ident = Constants.DEFAULT_IDENT as Ident;
    }

    let cfg = new ClsxPlusConfig();

    if (configInitFn) {
      cfg = configInitFn(cfg);
    }

    return createClsxPlusFn(ident, cfg);
  })[0];
}

/**
 * A React hook for creating a `clsxPlus` function with caching automatically enabled.
 *
 * @param ident - The identifier for the `clsxPlus` function. If `null` or `undefined`, the default identifier will be used.
 * @param options - An object containing options for the cache. All values are in milliseconds. Each option defaults to `1000`.
 * @returns an instance of the `clsxPlus` function with a separate cache that is automatically enabled.
 */
export function useCachedClsxPlus<Ident extends string = DefaultIdent>(
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

  return useClsxPlus(ident, (cfg) => {
    cfg.enableReturnValueCache = true;
    cfg.ReturnValueCache.cacheMaxAge = returnValueMaxAge;
    cfg.ReturnValueCache.pruneInterval = returnValueInterval;

    cfg.enableDeferredValueCache = true;
    cfg.DeferredValueCache.cacheMaxAge = deferredValueMaxAge;
    cfg.DeferredValueCache.pruneInterval = deferredValueInterval;

    return cfg;
  });
}
