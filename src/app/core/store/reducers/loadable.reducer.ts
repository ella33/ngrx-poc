import { createReducer, on } from '@ngrx/store';

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

const initialState: ILoadable<null> = createInitialState(null);

export const withLoadableReducer = (reducer: () => void, actions: any) => (
  createReducer(
    initialState,
    on(actions.loading, (state) => ({ ...state, loading: true, error: false, done: false })),
    on(actions.error, (state) => ({ ...state, loading: false, error: true, done: true })),
    on(actions.done, (state, { data }) => {
      console.log(data);
      return { ...state, data, loading: false, error: false, done: true };
    }),
  )
);
