import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    modal: false
  },

  reducers: {
    // Muestra u oculta el modal de registro.
    toggleModal: (state) => {
      state.modal = !state.modal;
    },


  }
});

export const { toggleModal } = loginSlice.actions;
export default loginSlice.reducer;
