import store from "../redux/store";
import { initListas } from "../redux/reducers/listaSlice";

// Obtiene las listas de tareas.
// Guarda en redux el resultado de la llamada.
export default async function getListas() {
    const response = await fetch('https://task-manager-api-five.vercel.app/lists');
    const data = await response.json();
    store.dispatch(initListas(data));
    return data;
}