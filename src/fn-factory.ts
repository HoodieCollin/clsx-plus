import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CacheKeyBuilder } from './cache';
import GlobalConfig, { CxConfigType } from './config';
import { isCssVars, varsFn } from './css-vars';
import {
  BoundDeferredValueFn,
  DeferredValue,
  deferredValueFn,
} from './deferred-value';
import { cssFn, isInlineStyles } from './inline-styles';
import { Constants, ReturnValue } from './types-and-constants';
import { joinParts } from './utilities';

export interface CxFn {
  (strings: TemplateStringsArray, ...items: unknown[]): ReturnValue;
  css: typeof cssFn;
  defer: BoundDeferredValueFn;
  vars: typeof varsFn;
  Config: CxConfigType;
}

export function createCxFn(config: CxConfigType = GlobalConfig): CxFn {
  function processInput(strings: TemplateStringsArray, ...items: unknown[]) {
    const style: Map<string, string> = new Map();
    const extra: string[] = [];

    for (let item of items) {
      let nilExtra = true;

      if (isCssVars(item)) {
        for (const [key, value] of item) {
          style.set(key, value);
        }
      } else if (isInlineStyles(item)) {
        for (const [key, value] of item) {
          style.set(key, value);
        }

        const embeddedVars = item[Constants.CSS_VARS];

        if (isCssVars(embeddedVars)) {
          for (const [key, value] of embeddedVars) {
            style.set(key, value);
          }
        }
      } else {
        nilExtra = false;
      }

      if (nilExtra) {
        extra.push('');
      } else if (item instanceof DeferredValue) {
        extra.push(clsx(item.call()));
      } else {
        extra.push(clsx(item as ClassValue));
      }
    }

    let className = joinParts(strings, extra);

    if (config.enableTailwindMerge) {
      className = twMerge(className);
    }

    function toString() {
      return className;
    }

    return Object.defineProperties(toString, {
      toString: { value: toString },
      className: { value: className, enumerable: true },
      style: {
        value: style.size ? Object.fromEntries(style) : undefined,
        enumerable: true,
      },
    }) as ReturnValue;
  }

  const cxFn = function cx(
    strings: TemplateStringsArray,
    ...items: unknown[]
  ): ReturnValue {
    if (!config.enableReturnValueCache) {
      return processInput(strings, ...items);
    }

    const cacheKey = new CacheKeyBuilder([strings, items]).finalize();
    let entry = config.ReturnValueCache.get(cacheKey);
    let ret: ReturnValue;

    if (entry) {
      ret = entry.ret;
      entry.since = Date.now();
    } else {
      ret = processInput(strings, ...items);
      entry = { since: Date.now(), ret };
    }

    config.ReturnValueCache.set(cacheKey, entry);

    return ret;
  } as CxFn;

  return Object.defineProperties(cxFn, {
    css: { value: cssFn },
    defer: { value: deferredValueFn.bind(cxFn, config) },
    vars: { value: varsFn },
    Config: { value: config },
  });
}
