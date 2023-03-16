import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './reducers/listaSlice';
import usuarioReducer from './reducers/usuarioSlice';
import tareaReducer from './reducers/tareaSlice';
import landingPageReducer from './reducers/landingPageSlice';
import loginReducer from './reducers/loginSlice'

export default configureStore({
  reducer: {
    lista: listaReducer,
    usuario: usuarioReducer,
    tarea: tareaReducer,
    landingPage: landingPageReducer,
    login: loginReducer
  },
})