import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";

const redux = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default redux;
