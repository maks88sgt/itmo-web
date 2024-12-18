type Reducer<S, A> = (state: S, action: A) => S;

type Listener = () => void;

export function createStore<S, A>(
  reducer: Reducer<S, A>,
  initialState: S
) {
  let state = initialState;
  const listeners: Listener[] = [];

  return {
    getState() {
      return state;
    },
    dispatch(action: A) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(listener: Listener) {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index !== -1) listeners.splice(index, 1);
      };
    },
  };
}