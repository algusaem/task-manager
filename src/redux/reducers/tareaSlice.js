import { createSlice } from "@reduxjs/toolkit";

export const tareaSlice = createSlice({
  name: "tarea",
  initialState: {
    tareas: [],
    tareaElegida: null,
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
    },

    // Actualiza la tarea seleccionada
    updateTask: (state, action) => {
      const { tareaElegida, input } = action.payload;
      const tareaIndex = state.tareas.findIndex(tarea => tarea.name === tareaElegida);
      if (tareaIndex !== -1) {
        state.tareas[tareaIndex].name = input;
        state.tareaElegida = input;
      }
    },
    
    // Añade al estado la tarea elegida.
    setTareaElegida: (state, action) => {
      state.tareaElegida = action.payload;
    }
  }
});

export const { setTareas, setNewTask, deleteTask, setTareaElegida, updateTask } = tareaSlice.actions;
export default tareaSlice.reducer;