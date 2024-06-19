import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { componentRender } from 'shared/lib/tests';

describe('Button', () => {
  test('test render', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  test('test clean theme', () => {
    componentRender(<Button theme="clean">Hello</Button>);

    expect(screen.getByText('Hello')).toHaveClass('clean');
  });
});
