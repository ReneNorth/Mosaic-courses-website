import { render, screen } from '@testing-library/react';
import App from '../components/App/App';

test('render h1 element', () => {
  render(<App />);
  const logoElement = screen.getByAltText('Логотип');
  expect(logoElement).toBeInTheDocument();
});
