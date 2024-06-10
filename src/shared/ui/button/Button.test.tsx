import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('test render', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  test('test clean theme', () => {
    render(<Button theme="clean">Hello</Button>);

    expect(screen.getByText('Hello')).toHaveClass('clean');
  });
});
