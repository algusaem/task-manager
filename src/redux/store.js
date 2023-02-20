import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './reducers/listaSlice';

export default configureStore({
  reducer: {
    lista: listaReducer,
  },
})