import { createCssVars, CssVars } from './css-vars';
import { Constants, StyleDeclaration, StyleValue } from './types-and-constants';
import { serializeStyleValue } from './utilities';

export type InlineStyles<T extends string> = Map<string, StyleValue> & {
  [Constants.INLINE_STYLES]: true;
  [Constants.CSS_VARS]?: CssVars<T>;
};

/**
 *
 */
export function cssFn<T extends string = never>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): InlineStyles<T> {
  const inline = createInlineStyles<T>();
  const vars = createCssVars<T>();
  let hasVars = false;

  for (let i = 0; i < strings.length; i++) {
    const rules = strings[i].split(';');

    for (let j = 0; j < rules.length; j++) {
      const [key, value] = rules[j].split(':').map((s) => s.trim());

      let dst: Map<string, any> = inline;

      if (Constants.CSS_VAR_PATTERN.test(key)) {
        dst = vars;
        hasVars = true;
      }

      // if last rule in this chunk, we can allow an empty value and supply a value from the values array
      if (!values.length || j < rules.length - 1) {
        dst.set(key, value);
      } else {
        dst.set(key, serializeStyleValue(values.shift()));
      }
    }
  }

  if (hasVars) {
    inline[Constants.CSS_VARS] = vars as CssVars<T>;
  }

  return inline;
}

export function createInlineStyles<
  T extends string = never
>(): InlineStyles<T> {
  const ret = new Map() as InlineStyles<T>;

  Object.defineProperty(ret, Constants.INLINE_STYLES, {
    value: true,
    enumerable: false,
  });

  return ret;
}

export function isInlineStyles<T extends string>(
  arg: any
): arg is InlineStyles<T> {
  return arg && arg[Constants.INLINE_STYLES] === true;
}

export function styleDeclarationFn<T extends StyleDeclaration>(
  styles: T
): InlineStyles<keyof T & string> {
  const ret = createInlineStyles<keyof T & string>();

  for (const key in styles) {
    ret.set(key, styles[key] as any);
  }

  return ret;
}
