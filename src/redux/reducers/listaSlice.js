import { createSlice } from "@reduxjs/toolkit";

export const listaSlice = createSlice({
  name: "lista",
  initialState: {
    listas: [],
    listaElegida: undefined,
  },

  reducers: {
    // Define la lista elegida por el usuario.
    setListaElegida: (state, action) => {
      state.listaElegida = action.payload.nombre;
    },

    // Guarda las listas disponibles en Redux.
    initListas: (state, action) => {
      state.listas = action.payload;
    },
  }
});

export const { setListaElegida, initListas } = listaSlice.actions;
export default listaSlice.reducer;
