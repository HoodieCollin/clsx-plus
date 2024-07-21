import { expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import tw from './index';

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
