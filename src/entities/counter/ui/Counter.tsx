import { StateSchema } from 'app/providers/storeProvider';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';

export function Counter() {
  const count = useSelector((state: StateSchema) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          data-testid="increment-btn"
          aria-label={`Increment value`}
          onClick={() => dispatch(counterActions.increment())}
        >
          {`Increment`}
        </button>
        <span data-testid="value-title">{count}</span>
        <button
          data-testid="decrement-btn"
          aria-label={`Decrement value`}
          onClick={() => dispatch(counterActions.decrement())}
        >
          {`Decrement`}
        </button>
      </div>
    </div>
  );
}
