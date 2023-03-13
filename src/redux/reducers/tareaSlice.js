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
    // Añade una nueva tarea a la lista de tareas.
    setNewTask: (state, action) => {
      const tarea = {
        _id: action.payload._id,
        name: action.payload.name,
        listname: action.payload.listname
      };
      state.tareas.push(tarea);
    },
  }
});

export const { setTareas, setNewTask } = tareaSlice.actions;
export default tareaSlice.reducer;