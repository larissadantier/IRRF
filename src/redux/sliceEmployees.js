import { createSlice } from "@reduxjs/toolkit";
import pessoas from "../services/pessoas.json";

const INITIAL_STATE = pessoas;

const sliceEmployees = createSlice({
  name: "employees",
  initialState: INITIAL_STATE,
  reducers: {
    addEmployee(state, { payload }) {
      return [...state, { employees: payload }];
    },
  },
});

export default sliceEmployees.reducer;
export const { addEmployee } = sliceEmployees.actions;

export const useEmployees = (state) => {
  return state.employees;
};
