import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { store } from '../../services/store';
import { ProfileModal } from './ProfileModal';

describe('ProfileModal', () => {
  it('despite the fact that the component is hidden all components are rendered', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileModal isOpen={false} setIsOpen={() => {}} />
        </BrowserRouter>
      </Provider>,
    );

    expect(queryByText('Настройки аккаунта')).not.toBeInTheDocument();
    expect(queryByText('Мои мастер-классы')).not.toBeInTheDocument();
    expect(queryByText('Выйти')).not.toBeInTheDocument();
    expect(queryByAltText('В настройки профиля')).not.toBeInTheDocument();
    expect(queryByAltText('Записаться на курс')).not.toBeInTheDocument();
    expect(queryByAltText('Выйти из профиля')).not.toBeInTheDocument();
  });
  it('check whether the necessary classes are added when opening the component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileModal isOpen setIsOpen={() => {}} />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByTestId('popup')).toHaveAttribute('class', 'popup popupOpen');
  });

  // Add more test cases
});
