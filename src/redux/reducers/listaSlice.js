import { createSlice } from "@reduxjs/toolkit";
import listas from '../../mock/listas.json';

export const listaSlice = createSlice({
  name: "lista",
  initialState: listas,
  reducers: {
    listaSlice: (state, action) => {

    }
  }
});

export default listaSlice.reducer;