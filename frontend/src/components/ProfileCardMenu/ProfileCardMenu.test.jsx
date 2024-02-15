import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProfileCardMenu } from './ProfileCardMenu';

describe('ProfileCardMenu', () => {
  const cardIcon = <svg title="iconSvg" />;
  const cardTitle = 'Card Title';
  const cardText = 'This is the card text.';

  it('renders ProfileCardMenu component with provided props', () => {
    render(<ProfileCardMenu
      cardIcon={cardIcon}
      cardTitle={cardTitle}
      cardText={cardText}
    />);
    const profileCardMenu = screen.getByTestId('profile-card');
    expect(profileCardMenu).toBeInTheDocument();
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('This is the card text.')).toBeInTheDocument();
    expect(screen.getByTitle('iconSvg')).toBeInTheDocument();
  });
});
