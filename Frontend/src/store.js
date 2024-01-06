import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/loginSlice";
import signReducer from "./Features/signSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sign: signReducer,
  },
});
