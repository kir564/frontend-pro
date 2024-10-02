import { componentRender } from '@/shared/lib/tests';
import { Counter } from './Counter';
import { fireEvent, screen } from '@testing-library/react';

describe('Counter', () => {
  test('should render', () => {
    const initialState = { counter: { value: 10 } };

    componentRender(<Counter />, { initialState });

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('increment', () => {
    const initialState = { counter: { value: 10 } };

    componentRender(<Counter />, { initialState });

    const btn = screen.getByTestId('increment-btn');

    fireEvent.click(btn);

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decrement', () => {
    const initialState = { counter: { value: 10 } };

    componentRender(<Counter />, { initialState });

    const btn = screen.getByTestId('decrement-btn');

    fireEvent.click(btn);

    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
