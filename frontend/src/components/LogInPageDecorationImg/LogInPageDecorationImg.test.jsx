import React from 'react';
import { render, screen } from '@testing-library/react';
import { LogInPageDecorationImg } from './LogInPageDecorationImg';
import '@testing-library/jest-dom';

describe('LogInPageDecorationImg Component', () => {
  test('renders LogInPageDecoration component', () => {
    render(<LogInPageDecorationImg data-testid="pageDecorationImg" />);
    expect(screen.getByTestId('pageDecorationImg')).toBeInTheDocument();
  });
  test('applies the correct CSS class', () => {
    render(<LogInPageDecorationImg data-testid="pageDecorationImg" />);
    const decorationElement = screen.getByTestId('pageDecorationImg');
    expect(decorationElement).toHaveClass('imgContainer');
  });
  test('renders the correct images', () => {
    const { container } = render(<LogInPageDecorationImg data-testid="pageDecorationImg" />);
    expect(container.getElementsByClassName('image')[0]).toHaveAttribute('src', 'register_img-one.png');
    expect(container.getElementsByClassName('figure')[0]).toHaveAttribute('src', 'register_img-two.png');
  });
  test('applies the correct CSS classes to nested elements', () => {
    render(<LogInPageDecorationImg data-testid="pageDecorationImg" />);
    const wrapperElement = screen.getByTestId('pageDecorationImg').querySelector('.wrapper');
    expect(wrapperElement).toHaveClass('wrapper');
    const plugElement = screen.getByTestId('pageDecorationImg').querySelector('.plug');
    expect(plugElement).toHaveClass('plug');
    const figureWrapperElement = screen.getByTestId('pageDecorationImg').querySelector('.figureWrapper');
    expect(figureWrapperElement).toHaveClass('figureWrapper');
    const figureBorderElement = screen.getByTestId('pageDecorationImg').querySelector('.figureBorder');
    expect(figureBorderElement).toHaveClass('figureBorder');
  });
});
