import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders app header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Your Portfolio/i);
  expect(headerElement).toBeInTheDocument();
});