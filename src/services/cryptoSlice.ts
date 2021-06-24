import { createSlice } from '@reduxjs/toolkit';

interface ICryptoState {
  coins: string[] | null;
  loading: boolean;
  error: { message: string } | null;
}

const initialState: ICryptoState = {
  coins: null,
  loading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    addCoins: (state, action) => {
      console.log(state, action);
    },
    setLoading: (state, action) => {},
    setError: (state, action) => {},
  },
});

export const { addCoins, setError, setLoading } = cryptoSlice.actions;

export default cryptoSlice.reducer;
