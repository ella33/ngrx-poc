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

export const withLoadableReducer = (initialState, actions: any) => (
  createReducer(
    initialState,
    on(actions.loading, (state) => ({ ...state, loading: true, error: false, done: false })),
    on(actions.error, (state) => ({ ...state, loading: false, error: true, done: true })),
    on(actions.done, (state, { data }) => ({ ...state, data, loading: false, error: false, done: true })),
  )
);
