import { createSlice } from "@reduxjs/toolkit";
import listas from '../../mock/listas.json';

export const listaSlice = createSlice({
  name: "lista",
  initialState: {
    listas,
    listaElegida: undefined,
  },

  reducers: {
    // Define la lista elegida por el usuario.
    setListaElegida: (state, action) => {
      state.listaElegida = action.payload.nombre;
    }
  }
});

export const { setListaElegida } = listaSlice.actions;
export default listaSlice.reducer;