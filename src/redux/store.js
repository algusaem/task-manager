import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './reducers/listaSlice';
import usuarioReducer from './reducers/usuarioSlice';

export default configureStore({
  reducer: {
    lista: listaReducer,
    usuario: usuarioReducer,
  },
})