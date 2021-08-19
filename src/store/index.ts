import create, { State, StateCreator } from 'zustand';
import produce from 'immer';
import { devtools } from 'zustand/middleware';
import { IStore } from './types';
import { fetchCoins } from '../services';

const immer =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState = typeof partial === 'function' ? produce(partial as (state: T) => T) : (partial as T);
        return set(nextState, replace);
      },
      get,
      api
    );

export const useStore = create<IStore>(
  devtools(
    immer((set) => ({
      coins: null,
      error: null,
      loading: false,
      perPage: 20,
      setPerPage: (val: number) => {
        set({ perPage: val });
      },
      fetchCoinsData: async (perPage = 20) => {
        try {
          set({ loading: true, error: null });
          const data = await fetchCoins({ currency: 'usd', perPage });
          set({ coins: data, loading: false, error: null });
        } catch (error) {
          set({ error: 'Something went wrong', loading: false });
        }
      },
    }))
  )
);
