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

    switch (type) {
      case actions.initiate.type:
        state = { ...state, loading: true, error: false, done: false };
        break;
      case actions.done.type:
        state = { ...state, data, loading: false, error: false, done: true };
        break;
      case actions.error.type:
        state = { ...state, loading: false, error: true, done: true };
        break;
    }

    return baseReducer(state, action);
  };
};
