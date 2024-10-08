import { StateSchema } from '@/app/providers/storeProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter values', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
