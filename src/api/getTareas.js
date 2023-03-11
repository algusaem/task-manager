import store from "../redux/store";
import { setTareas } from "../redux/reducers/tareaSlice";

// Obtiene las listas de tareas del usuario seleccionado.
// Guarda en redux el resultado de la llamada.
export default async function getTareas(listname) {
    const response = await fetch(`https://task-manager-api-five.vercel.app/tasks/${listname}`);
    const data = await response.json();
    store.dispatch(setTareas(data));
}