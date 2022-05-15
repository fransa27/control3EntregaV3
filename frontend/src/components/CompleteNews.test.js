import { render, screen } from '@testing-library/react';
import CompleteNew from './CompleteNews';

test('renders learn react link', () => {
  render(<CompleteNew />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
