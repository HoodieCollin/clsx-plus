import { Constants, UnsupportedValueError } from './types-and-constants';

export function joinParts(
  strings: TemplateStringsArray,
  extras: string[]
): string {
  let className = '';
  let i = 0;

  while (true) {
    const str = strings[i] || '';
    const extra = extras[i] || '';

    const next = `${str} ${extra}`.trim();

    if (next) {
      className += ` ${next}`;
    }

    i += 1;

    if (i >= strings.length && i >= extras.length) {
      className = className.trim();
      break;
    }
  }

  return className.trim();
}

export function serializeStyleValue(value: unknown): string {
  switch (typeof value) {
    case 'string': {
      const nextValue = value.trim();

      if (Constants.CSS_VAR_PATTERN.test(nextValue)) {
        return `var(${nextValue})`;
      } else {
        return nextValue;
      }
    }
    case 'boolean':
    case 'number': {
      return `${value}`;
    }
    case 'function': {
      return `${serializeStyleValue(value())}`;
    }
    case 'object': {
      if (value === null) {
        return '';
      }

      // explicit fallthrough
    }
    default: {
      const err: UnsupportedValueError = Object.assign(
        new Error(`Unsupported value type: ${typeof value}`),
        {
          name: 'UnsupportedValueError',
          value,
        }
      );

      throw err;
    }
  }
}

export function serializeCacheKeyValue(value: unknown): string {
  return JSON.stringify(value, (_, inner) => {
    if (typeof inner === 'function') {
      return inner.toString();
    }

    return inner;
  });
}
