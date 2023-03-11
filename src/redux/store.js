import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './reducers/listaSlice';
import usuarioReducer from './reducers/usuarioSlice';
import tareaReducer from './reducers/tareaSlice';

export default configureStore({
  reducer: {
    lista: listaReducer,
    usuario: usuarioReducer,
    tarea: tareaReducer,
  },
})