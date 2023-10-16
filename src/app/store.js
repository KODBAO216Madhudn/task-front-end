import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/login/loginSlice";
// -----------------------------------------------------------------------------1
export const store = configureStore({
    reducer: {
        login: loginSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

