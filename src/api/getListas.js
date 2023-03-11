import store from "../redux/store";
import { initListas } from "../redux/reducers/listaSlice";

// Obtiene las listas de tareas del usuario seleccionado.
// Guarda en redux el resultado de la llamada.
export default async function getListas(username) {
    const response = await fetch(`https://task-manager-api-five.vercel.app/lists/${username}`);
    const data = await response.json();

    store.dispatch(initListas(data));
}