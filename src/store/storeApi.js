import { configureStore } from "@reduxjs/toolkit";

import { dota2heroes } from "../services/dota2heroes.js";

// di sini kita akan membuat store-nya
export const store = configureStore({
  reducer: {
    [dota2heroes.reducerPath]: dota2heroes.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dota2heroes.middleware);
  },
  //
});
