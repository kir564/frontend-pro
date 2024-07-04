import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
  test('should work with empty state', () => {
    const state: CounterSchema | undefined = undefined;
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 1,
    });
  });
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
});
