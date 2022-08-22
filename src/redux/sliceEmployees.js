import { createSlice } from "@reduxjs/toolkit";
import pessoas from "../services/pessoas";

const sliceEmployees = createSlice({
  name: "employees",
  initialState: { value: pessoas },
  reducers: {
    addEmployee(state, action) {
      state.value.push(action.payload);
    },
    deleteEmployee(state, action) {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    updateEmployee(state, action) {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.nome = action.payload.nome;
          item.cpf = action.payload.cpf;
          item.salario = action.payload.salario;
          item.desconto = action.payload.desconto;
          item.dependentes = action.payload.dependentes;
        }
      });
    },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } =
  sliceEmployees.actions;
export default sliceEmployees.reducer;
