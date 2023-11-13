import React from 'react';
import {
  render, screen, fireEvent,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignHeaderLinks } from './SignHeaderLinks';
import { renderWithRouter } from '../../helpers/tes/renderWithRouter';
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
  it('navigates to the correct route when a link is clicked', async () => {
    render(
      <MemoryRouter>
        <SignHeaderLinks />
      </MemoryRouter>,
    );
    const signInLink = screen.getByText('Войти');
    fireEvent.click(signInLink);

    // Use waitFor to wait for the next tick of the event loop
    await waitFor(() => {
      // Assert that navigation has occurred
      expect(window.location.pathname).toBe('/sign-in');
    });
  });
});
