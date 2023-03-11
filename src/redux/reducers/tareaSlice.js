import { createSlice } from "@reduxjs/toolkit";

export const tareaSlice = createSlice({
  name: "tarea",
  initialState: {
    tareas: []
  },

  reducers: {
    // Define las tareas linkeadas a la lista elegida.
    setTareas: (state, action) => {
      state.tareas = action.payload;
    },
  }
});

export const { setTareas } = tareaSlice.actions;
export default tareaSlice.reducer;