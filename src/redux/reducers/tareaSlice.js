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
    // Borra del estado las tareas con el nombre proporcionado.
    deleteTask: (state, action) => {
      const filteredTareas = state.tareas.filter(tarea => tarea.name !== action.payload);
      state.tareas = filteredTareas;
    }
  }
});

export const { setTareas, setNewTask, deleteTask } = tareaSlice.actions;
export default tareaSlice.reducer;