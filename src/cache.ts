import { DeferredValue } from './deferred-value';
import { isInlineStyles } from './inline-styles';
import { Constants } from './types-and-constants';
import { serializeCacheKeyValue } from './utilities';

export class Cache<T extends { since: number }> {
  constructor() {}

  private _cache = new Map<string, T>();

  private _intervalId: NodeJS.Timeout | null = null;

  private _cacheMaxAge = Infinity;

  get cacheMaxAge(): number {
    return this._cacheMaxAge;
  }

  set cacheMaxAge(value: number) {
    if (value <= 0) {
      value = Infinity;
    }

    if (value === this._cacheMaxAge) {
      return;
    }

    this._cacheMaxAge = value;
    this.stopPruner();
    this.startPruner();
  }

  private _pruneInterval = Infinity;

  get pruneInterval(): number {
    return this._pruneInterval;
  }

  set pruneInterval(value: number) {
    if (value <= 0) {
      value = Infinity;
    }

    if (value === this._pruneInterval) {
      return;
    }

    this._pruneInterval = value;
    this.stopPruner();
    this.startPruner();
  }

  public startPruner = () => {
    if (this._intervalId) {
      console.warn('Cache pruner already running. This is a no-op.');
      return;
    }

    if (this.pruneInterval < Infinity && this.cacheMaxAge < Infinity) {
      this._intervalId = setInterval(
        () => this.pruneCache(),
        this.pruneInterval
      );
    }
  };

  public stopPruner = () => {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  };

  public pruneCache = () => {
    const now = Date.now();
    const maxAge = this.cacheMaxAge;

    for (const [key, meta] of this._cache) {
      if (now - meta.since > maxAge) {
        this._cache.delete(key);
      }
    }
  };

  public get = (key: string) => {
    return this._cache.get(key);
  };

  public set = (key: string, value: T) => {
    this._cache.set(key, value);
  };
}

export class CacheKeyBuilder {
  constructor(...items: any[]) {
    if (items.length) {
      this.add(items);
    }
  }

  private _sequence = new Set<string>();

  public add = (value: unknown) => {
    if (isInlineStyles(value)) {
      for (const [key, inner] of value) {
        this.add(key);
        this.add(inner);
      }

      const embeddedVars = value[Constants.CSS_VARS];

      if (embeddedVars) {
        this.add(embeddedVars);
      }
    } else if (value instanceof DeferredValue) {
      this.add(value.args);
      this.add(value.fn);
      this.add(value.equalityChecker);
    } else if (value instanceof Map) {
      for (const [key, inner] of value) {
        this.add(key);
        this.add(inner);
      }
    } else if (value instanceof Array) {
      for (const inner of value) {
        this.add(inner);
      }
    } else if (Array.isArray(value)) {
      for (const inner of value) {
        this.add(inner);
      }
    } else {
      this._sequence.add('::');

      switch (typeof value) {
        case 'boolean':
        case 'bigint':
        case 'function':
        case 'string':
        case 'number': {
          this._sequence.add(value.toString());
          break;
        }
        default: {
          this._sequence.add(serializeCacheKeyValue(value));
          break;
        }
      }
    }
  };

  public finalize = () => {
    return Array.from(this._sequence).join('');
  };
}
