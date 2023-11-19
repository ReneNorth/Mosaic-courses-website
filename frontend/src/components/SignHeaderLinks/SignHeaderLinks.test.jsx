import React from 'react';
import {
  render, screen, fireEvent,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignHeaderLinks } from './SignHeaderLinks';
import '@testing-library/jest-dom';

describe('SignHeaderLinks Component', () => {
  it('renders SignHeaderLinks with correct links and titles', () => {
    render(
      <MemoryRouter>
        <SignHeaderLinks />
      </MemoryRouter>,
    );

    // Assuming that the route paths are correct
    const expectedLinks = [
      { id: '1', link: '/sign-in', title: 'Войти' },
      { id: '2', link: '/register', title: 'Зарегистрироваться' },
    ];

    expectedLinks.forEach((link) => {
      const renderedLink = screen.getByText(link.title);
      expect(renderedLink).toBeInTheDocument();
      expect(renderedLink.closest('a')).toHaveAttribute('href', link.link);
    });
  });

  it('applies active class to the active link', () => {
    // Assuming that the route paths are correct
    const activeLinkPath = '/sign-in';

    render(
      <MemoryRouter initialEntries={[activeLinkPath]}>
        <SignHeaderLinks />
      </MemoryRouter>,
    );

    const activeLink = screen.getByText('Войти');
    expect(activeLink.closest('a')).toHaveClass('active');
  });
});
