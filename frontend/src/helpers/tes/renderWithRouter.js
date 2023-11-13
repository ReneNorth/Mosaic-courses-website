import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../../components/App/App';

export const renderWithRouter = (component, initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
      {component}
    </MemoryRouter>,
  );
};
