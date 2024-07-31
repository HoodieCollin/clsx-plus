## API Report File for "clsx-plus"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClassValue } from 'clsx';

// @public
export type BoundDeferredValueFn = <A extends [any, ...any[]]>(args: A, fn: CalculationFn<A>, equalityChecker?: EqualityChecker<CalculationFn<A>>) => DeferredValue<A>;

// @public
class Cache_2<T extends {
    since: number;
}> {
    constructor();
    get cacheMaxAge(): number;
    set cacheMaxAge(value: number);
    get: (key: string) => T | undefined;
    pruneCache: () => void;
    get pruneInterval(): number;
    set pruneInterval(value: number);
    set: (key: string, value: T) => void;
    startPruner: () => void;
    stopPruner: () => void;
}
export { Cache_2 as Cache }

// Warning: (ae-internal-missing-underscore) The name "CacheKeyBuilder" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export class CacheKeyBuilder {
    constructor(...items: any[]);
    add: (value: unknown) => void;
    finalize: () => string;
}

// @public
export type CalculationFn<A extends [any, ...any[]] = any> = (...args: A) => ClassValue | CssVars<any> | InlineStyles<any>;

// Warning: (ae-internal-missing-underscore) The name "CalculationFnMeta" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export type CalculationFnMeta<F extends CalculationFn = any> = {
    since: number;
    args: Parameters<F>;
    ret: ClassValue | CssVars<any> | InlineStyles<any>;
};

// @public
export class ClsxPlusConfig {
    constructor(enableTailwindMerge?: boolean, enableReturnValueCache?: boolean, enableDeferredValueCache?: boolean, defaultEqualityChecker?: (value: any, other: any) => boolean);
    // (undocumented)
    defaultEqualityChecker: (value: any, other: any) => boolean;
    // Warning: (ae-incompatible-release-tags) The symbol "DeferredValueCache" is marked as @public, but its signature references "CalculationFnMeta" which is marked as @internal
    DeferredValueCache: Cache_2<CalculationFnMeta>;
    // (undocumented)
    enableDeferredValueCache: boolean;
    // (undocumented)
    enableReturnValueCache: boolean;
    // (undocumented)
    enableTailwindMerge: boolean;
    // Warning: (ae-incompatible-release-tags) The symbol "ReturnValueCache" is marked as @public, but its signature references "ReturnValueMeta" which is marked as @internal
    ReturnValueCache: Cache_2<ReturnValueMeta>;
}

// Warning: (ae-incompatible-release-tags) The symbol "ClsxPlusFn" is marked as @public, but its signature references "StringConstant" which is marked as @internal
//
// @public (undocumented)
export type ClsxPlusFn<Ident extends string> = {
    (strings: TemplateStringsArray, ...items: unknown[]): ReturnValue;
    (cb: (cx: ClsxPlusFn<StringConstant<Ident>>) => ReturnValue): ReturnValue;
    css: typeof cssFn;
    vars: typeof varsFn;
    styles: typeof styleDeclarationFn;
    defer: BoundDeferredValueFn;
    Config: ClsxPlusConfig;
} & {
    [K in StringConstant<Ident>]: ClsxPlusFn<StringConstant<Ident>>;
};

// Warning: (ae-internal-missing-underscore) The name "Constants" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export namespace Constants {
    const CSS_VAR_PATTERN: RegExp;
    const CSS_VARS: unique symbol;
    const INLINE_STYLES: unique symbol;
    const FALLBACK_IDENT = "tw";
    const DEFAULT_IDENT: string;
}

// Warning: (ae-incompatible-release-tags) The symbol "createClsxPlusFn" is marked as @public, but its signature references "StringConstant" which is marked as @internal
// Warning: (ae-incompatible-release-tags) The symbol "createClsxPlusFn" is marked as @public, but its signature references "DefaultIdent" which is marked as @internal
//
// @public
export function createClsxPlusFn<Ident extends string>(ident?: Ident | null, configOrConfigInitFn?: ClsxPlusConfig | ((cfg: ClsxPlusConfig) => void)): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? DefaultIdent : Ident>;

// Warning: (ae-internal-missing-underscore) The name "createCssVars" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function createCssVars<T extends string = never>(): CssVars<T>;

// Warning: (ae-internal-missing-underscore) The name "createInlineStyles" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function createInlineStyles<T extends string = never>(): InlineStyles<T>;

// Warning: (ae-internal-missing-underscore) The name "cssFn" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function cssFn<T extends string = never>(strings: TemplateStringsArray, ...values: unknown[]): InlineStyles<T>;

// @public
export type CssVars<T extends string> = [T] extends [never] ? never : Map<`--${T}`, string> & {
    [Constants.CSS_VARS]: true;
};

// @public
const _default: ClsxPlusFn<"tw">;
export default _default;

// Warning: (ae-internal-missing-underscore) The name "DefaultIdent" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export type DefaultIdent = [
Extract<typeof process.env.CLSX_PLUS_DEFAULT_FN_IDENT, undefined>
] extends [never] ? StringConstant<typeof Constants.DEFAULT_IDENT> : typeof Constants.FALLBACK_IDENT;

// @public
export class DeferredValue<A extends [any, ...any[]]> {
    // @internal
    constructor(_config: ClsxPlusConfig, args: A, fn: CalculationFn<A>, equalityChecker?: EqualityChecker<CalculationFn<A>> | undefined);
    // (undocumented)
    readonly args: A;
    call: () => ClassValue;
    // (undocumented)
    readonly equalityChecker?: EqualityChecker<CalculationFn<A>> | undefined;
    // (undocumented)
    readonly fn: CalculationFn<A>;
}

// Warning: (ae-internal-missing-underscore) The name "deferredValueFn" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function deferredValueFn<A extends [any, ...any[]]>(config: ClsxPlusConfig, args: A, fn: CalculationFn<A>, equalityChecker?: EqualityChecker<CalculationFn<A>>): DeferredValue<A>;

// @public
export type EqualityChecker<F extends CalculationFn = any> = (old: Parameters<F>, current: Parameters<F>) => boolean;

// @public
export const GlobalClsxPlusConfig: ClsxPlusConfig;

// @public
export type InlineStyles<T extends string> = Map<string, StyleValue> & {
    [Constants.INLINE_STYLES]: true;
    [Constants.CSS_VARS]?: CssVars<T>;
};

// Warning: (ae-internal-missing-underscore) The name "isCssVars" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function isCssVars<T extends string>(arg: any): arg is CssVars<T>;

// Warning: (ae-internal-missing-underscore) The name "isInlineStyles" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function isInlineStyles<T extends string>(arg: any): arg is InlineStyles<T>;

// Warning: (ae-internal-missing-underscore) The name "joinParts" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function joinParts(strings: TemplateStringsArray, extras: string[]): string;

// @public
export interface ReturnValue {
    // (undocumented)
    (): string;
    // (undocumented)
    className: string;
    // (undocumented)
    style?: Record<string, string>;
    // (undocumented)
    toString(): string;
}

// Warning: (ae-internal-missing-underscore) The name "ReturnValueMeta" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export type ReturnValueMeta = {
    since: number;
    ret: ReturnValue;
};

// Warning: (ae-internal-missing-underscore) The name "serializeCacheKeyValue" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function serializeCacheKeyValue(value: unknown): string;

// Warning: (ae-internal-missing-underscore) The name "serializeStyleValue" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function serializeStyleValue(value: unknown): string;

// Warning: (ae-internal-missing-underscore) The name "StringConstant" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export type StringConstant<Str> = [UnionToIntersection<Str>] extends [never] ? never : Str extends string ? string extends Str ? never : Str : never;

// @public
export type StyleDeclaration = {
    [K in string & keyof CSSStyleDeclaration]?: StyleValue;
};

// Warning: (ae-internal-missing-underscore) The name "styleDeclarationFn" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function styleDeclarationFn<T extends StyleDeclaration>(styles: T): InlineStyles<keyof T & string>;

// @public
export type StyleValue = string | number | boolean | null | undefined;

// Warning: (ae-internal-missing-underscore) The name "UnionToIntersection" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (x: infer I) => void ? I : never;

// @public
export type UnsupportedValueError = Error & {
    value: any;
};

// Warning: (ae-incompatible-release-tags) The symbol "useCachedClsxPlus" is marked as @public, but its signature references "DefaultIdent" which is marked as @internal
// Warning: (ae-incompatible-release-tags) The symbol "useCachedClsxPlus" is marked as @public, but its signature references "StringConstant" which is marked as @internal
//
// @public
export function useCachedClsxPlus<Ident extends string = DefaultIdent>(ident?: Ident | null, options?: {
    returnValueMaxAge?: number;
    returnValueInterval?: number;
    deferredValueMaxAge?: number;
    deferredValueInterval?: number;
}): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? "tw" : Ident>;

// Warning: (ae-incompatible-release-tags) The symbol "useClsxPlus" is marked as @public, but its signature references "DefaultIdent" which is marked as @internal
// Warning: (ae-incompatible-release-tags) The symbol "useClsxPlus" is marked as @public, but its signature references "StringConstant" which is marked as @internal
//
// @public
export function useClsxPlus<Ident extends string = DefaultIdent>(ident?: Ident | null, configInitFn?: (cfg: ClsxPlusConfig) => ClsxPlusConfig): ClsxPlusFn<[StringConstant<Ident>] extends [never] ? "tw" : Ident>;

// Warning: (ae-internal-missing-underscore) The name "varsFn" should be prefixed with an underscore because the declaration is marked as @internal
//
// @internal
export function varsFn<T extends string>(arg: Record<T, StyleValue>): CssVars<T>;

// Warnings were encountered during analysis:
//
// src/css-vars.ts:10:31 - (ae-incompatible-release-tags) The symbol "[Constants.CSS_VARS]" is marked as @public, but its signature references "Constants" which is marked as @internal
// src/fn-factory.ts:40:3 - (ae-incompatible-release-tags) The symbol "__call" is marked as @public, but its signature references "StringConstant" which is marked as @internal
// src/fn-factory.ts:44:3 - (ae-incompatible-release-tags) The symbol "css" is marked as @public, but its signature references "cssFn" which is marked as @internal
// src/fn-factory.ts:48:3 - (ae-incompatible-release-tags) The symbol "vars" is marked as @public, but its signature references "varsFn" which is marked as @internal
// src/fn-factory.ts:52:3 - (ae-incompatible-release-tags) The symbol "styles" is marked as @public, but its signature references "styleDeclarationFn" which is marked as @internal
// src/inline-styles.ts:9:3 - (ae-incompatible-release-tags) The symbol "[Constants.INLINE_STYLES]" is marked as @public, but its signature references "Constants" which is marked as @internal
// src/inline-styles.ts:10:3 - (ae-incompatible-release-tags) The symbol "[Constants.CSS_VARS]" is marked as @public, but its signature references "Constants" which is marked as @internal

// (No @packageDocumentation comment for this package)

```