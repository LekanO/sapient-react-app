import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list name header', () => {
  render(<App />);
  const linkElement = screen.getByText("List Names");
  expect(linkElement).toBeInTheDocument();
});
