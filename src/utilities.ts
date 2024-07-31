import { Constants, UnsupportedValueError } from './types-and-constants';

/**
 * A utility function for joining template strings and extra values.
 *
 * @internal
 *
 * @param strings - The template strings array.
 * @param extras - The extra values to join with the template strings.
 * @returns The joined string.
 */
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

/**
 * Convert a value to a string suitable for use in a CSS declaration.
 *
 * @internal
 *
 * @param value - The value to serialize.
 * @returns The serialized value.
 * @throws `UnsupportedValueError` - If the value type is not supported.
 */
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

/**
 * A utility function for serializing cache key values. This function uses `JSON.stringify` to serialize the value. If the value is a function, it will be serialized via `.toString()`.
 *
 * @internal
 *
 * @param value - The cache key value to serialize.
 * @returns The serialized cache key value.
 */
export function serializeCacheKeyValue(value: unknown): string {
  return JSON.stringify(value, (_, inner) => {
    if (typeof inner === 'function') {
      return inner.toString();
    }

    return inner;
  });
}
