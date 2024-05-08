import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter to wrap the component
import '@testing-library/jest-dom';
import { ProfileNavMenu } from './ProfileNavMenu';

// Mock the cardInfo data
jest.mock('../../utils/consts/constants', () => ({
  CARD_CONFIG: [
    {
      cardId: 1, cardRoute: '/route1', cardIcon: 'icon1', cardTitle: 'Title 1',
    },
    {
      cardId: 2, cardRoute: '/route2', cardIcon: 'icon2', cardTitle: 'Title 2',
    },
  ],
}));

describe('ProfileNavMenu', () => {
  it('renders navigation items correctly', () => {
    render(
      // Wrap the component with MemoryRouter to enable testing of NavLink
      <MemoryRouter>
        <ProfileNavMenu />
      </MemoryRouter>,
    );

    // Verify that the navigation items are rendered
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();

    // Verify the presence of an icon
    expect(screen.getByText('icon1')).toBeInTheDocument();
  });

  it('applies active styles to the active NavLink', () => {
    render(
      // Wrap the component with MemoryRouter to enable testing of NavLink
      <MemoryRouter initialEntries={['/route1']}>
        <ProfileNavMenu />
      </MemoryRouter>,
    );
    // Verify that the active NavLink has the active class
    expect(screen.getByRole('link', { name: 'icon1 Title 1' })).toHaveClass('linkActive');
    // Verify that the inactive NavLink does not have the active class
    expect(screen.getByRole('link', { name: 'icon2 Title 2' })).not.toHaveClass('linkActive');
  });
});
