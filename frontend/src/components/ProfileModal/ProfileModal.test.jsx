import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { ProfileModal } from './ProfileModal';

describe('ProfileModal', () => {
  it('despite the fact that the component is hidden all components are rendered', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <BrowserRouter>
        <ProfileModal isOpen={false} setIsOpen={() => {}} />
      </BrowserRouter>,
    );

    expect(getByText('Настройки аккаунта')).toBeInTheDocument();
    expect(getByText('Мои мастерклассы')).toBeInTheDocument();
    expect(getByText('Выйти')).toBeInTheDocument();
    expect(getByAltText('В настройки профиля')).toBeInTheDocument();
    expect(getByAltText('Записаться на курс')).toBeInTheDocument();
    expect(getByAltText('Выйти из профиля')).toBeInTheDocument();
    // check that the component is hidden
    expect(getByTestId('overlay')).toHaveAttribute('class', 'overlay');
    expect(getByTestId('popup')).toHaveAttribute('class', 'popup');
  });
  it('check whether the necessary classes are added when opening the component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ProfileModal isOpen setIsOpen={() => {}} />
      </BrowserRouter>,
    );
    expect(getByTestId('overlay')).toHaveAttribute('class', 'overlay overlayOpen');
    expect(getByTestId('popup')).toHaveAttribute('class', 'popup popupOpen');
  });

  // Add more test cases
});
