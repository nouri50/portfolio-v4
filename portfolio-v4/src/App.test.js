import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Bienvenue sur Mon Portfolio/i); // Utiliser un texte existant
  expect(headerElement).toBeInTheDocument();
});
