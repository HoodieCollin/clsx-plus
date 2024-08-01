/**
 * A utility for generating class names with ease.
 *
 * @module clsx-plus
 *
 * @categoryDescription Main Entry Point
 * The entry point for the library. This is the default export and the main function that is used to generate class names.
 *
 * @categoryDescription Secondary Entry Points
 * These items are used to create new instances of the `clsxPlus` function with custom configurations or identifiers.
 *
 * @categoryDescription React Hooks
 * Generally speaking, you should able to use the default export and ignore the hooks provided in
 * this library. However, if you need to leverage the caching system and want to isolate the
 * cache for a specific component, you can use the `useClsxPlus` or `useCachedClsxPlus` hook.
 *
 * @categoryDescription Variables
 * Global variables that can be modified to change the behavior of the library.
 *
 * @categoryDescription Types and Constants
 * For the most part, these types and constants are used internally by the library. However, there
 * are a few types that are exported for use cases when you need to extend the library or create
 * custom hooks.
 *
 * @categoryDescription Implementation Details
 * These items are used internally by the library and are not intended for public use. They are
 * exported for documentation and type-checking purposes only.
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
 *
 * @category Main Entry Point
 *
 * @example
 * ```tsx
 * import tw from 'clsx-plus';
 *
 * export function MyComponent() {
 *   return (
 *     <div className={tw`text-red-500 bg-blue-500`}>
 *       Hello, world!
 *     </div>
 *   );
 * }
 *
 * ```
 */
const tw = createClsxPlusFn(Constants.DEFAULT_IDENT as DefaultIdent);

export default tw;

/**
 * A React hook for creating a customized `clsxPlus` function.
 *
 * @category React Hooks
 *
 * @param ident - The identifier for the `clsxPlus` function. If `null` or `undefined`, the default identifier will be used.
 * @param configInitFn - A callback that will receive a editable configuration object as it's only argument.
 * @returns an instance of the `clsxPlus` function with it's own configuration and separate cache.
 *
 * @example
 * ```tsx
 * import { useClsxPlus, ClsxPlusConfig } from 'clsx-plus';
 *
 * const MyConfig = new ClsxPlusConfig(true);
 *
 *
 *
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
 * @category React Hooks
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
    cfg.returnValueCacheEnabled = true;
    cfg.ReturnValueCache.cacheMaxAge = returnValueMaxAge;
    cfg.ReturnValueCache.pruneInterval = returnValueInterval;

    cfg.deferredValueCacheEnabled = true;
    cfg.DeferredValueCache.cacheMaxAge = deferredValueMaxAge;
    cfg.DeferredValueCache.pruneInterval = deferredValueInterval;

    return cfg;
  });
}
