import { createSlice } from "@reduxjs/toolkit";

export const landingPageSlice = createSlice({
  name: "landingPage",
  initialState: {
    show: false,
    content: null,
    instrucciones: false
  },

  reducers: {
    // Define el contenido del modal y lo muestra.
    setModal: (state, action) => {
      state.show = true;
      state.content = action.payload;
    },
    // Oculta el modal.
    unsetModal: (state) => {
      state.show = false;
    },

    // Muestra u oculta el modal de instrucciones.
    instrucciones: (state) => {
      state.instrucciones = !state.instrucciones;
    },
  }
});

export const { setModal, unsetModal, instrucciones } = landingPageSlice.actions;
export default landingPageSlice.reducer;