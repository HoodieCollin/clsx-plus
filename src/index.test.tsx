import { expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { ClsxPlusFn, createClsxPlusFn } from './fn-factory';
import tw, { CxConfig } from './index';
import { DefaultIdent } from './types-and-constants';

it('renders correctly', () => {
  const { asFragment } = render(<div className={tw`w-px h-2`()} />);

  expect(asFragment()).toMatchSnapshot();
});

it('renders inline styles', () => {
  const { asFragment } = render(
    <div
      {...tw`
        w-px h-2
        ${tw.css`color: red`}
      `}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it('renders inline styles from CSSStyleDeclaration', () => {
  const { asFragment } = render(
    <div
      {...tw`
        w-px h-2
        ${tw.styles({
          color: 'blue',
        })}
      `}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it('renders deferred values', () => {
  const [state, Test] = createTestComponent();

  const { asFragment } = render(<Test n={99} tw={tw} />);

  expect(asFragment()).toMatchSnapshot();
  expect(state.renderCount).toBe(1);

  render(<Test n={99} tw={tw} />);

  expect(state.renderCount).toBe(2);

  render(<Test n={33} tw={tw} />);

  expect(state.renderCount).toBe(3);
});

it('renders deferred values with caching', () => {
  const cfg = new CxConfig(false, false, true);
  cfg.DeferredValueCache.cacheMaxAge = 1000;
  cfg.DeferredValueCache.pruneInterval = 1000;

  const tw = createClsxPlusFn(null, cfg);

  const [state, Test] = createTestComponent();

  const { asFragment } = render(<Test n={99} tw={tw} />);

  expect(asFragment()).toMatchSnapshot();
  expect(state.renderCount).toBe(1);

  render(<Test n={99} tw={tw} />);

  expect(state.renderCount).toBe(1);

  render(<Test n={33} tw={tw} />);

  expect(state.renderCount).toBe(2);
});

function createTestComponent() {
  const state = { renderCount: 0 };

  return [
    state,
    function Test({ n, tw }: { n: number; tw: ClsxPlusFn<DefaultIdent> }) {
      return (
        <div
          className={tw`
            w-px h-2
            ${tw.defer([n], (_) => {
              state.renderCount++;
              return 'bg-green-500';
            })}
          `()}
        />
      );
    },
  ] as const;
}
