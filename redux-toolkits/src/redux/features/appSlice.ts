import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Currencies } from "../types/bitcoinTypes";

type AppState = {
  currency: Currencies;
};

const initialState: AppState = {
  currency: Currencies.EUR,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeCurrency: (state, actiion: PayloadAction<Currencies>) => {
      state.currency = actiion.payload;
    },
  },
});

export const { changeCurrency } = appSlice.actions;

export default appSlice.reducer;
