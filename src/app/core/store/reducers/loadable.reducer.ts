export interface ILoadable<T> {
  data: T;
  loading: boolean;
  error: boolean | any;
  done: boolean;
}

export function createInitialState<T>(initialData: T): ILoadable<T> {
  return {
    data: initialData,
    loading: false,
    error: false,
    done: false,
  };
}

export const withLoadableReducer = (baseReducer, actions) => {
  return (state, action) => {
    const { type, data } = action;
    if (type === actions.loading.type) {
      state = { ...state, loading: true, error: false, done: false };
    } else if (type === actions.loading.error) {
      state = { ...state, loading: false, error: true, done: true };
    } else if (actions.done && (type === actions.done.type)) {
      state = { ...state, data, loading: false, error: false, done: true };
    }

    return baseReducer(state, action);
  };
};
