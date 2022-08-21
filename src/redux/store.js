import { configureStore } from "@reduxjs/toolkit";
import sliceEmployees from "./sliceEmployees";


export const store = configureStore({
  reducer: {
    employees: sliceEmployees,
  },
});
