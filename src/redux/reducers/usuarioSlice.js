import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    id: null,
    username: null,
    password: null
  },

  reducers: {
    initUsuario: (state, action) => {
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.password = action.payload.password;
    },
  }
});

export const { initUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;