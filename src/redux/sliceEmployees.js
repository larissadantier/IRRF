import { createSlice } from "@reduxjs/toolkit";
import pessoas from "../services/pessoas";

const sliceEmployees = createSlice({
  name: "employees",
  initialState: { value: pessoas },
  reducers: {
    addEmployee(state, action) {
      state.value.push(action.payload);
    },
  },
});

export const { addEmployee } = sliceEmployees.actions;
export default sliceEmployees.reducer;
