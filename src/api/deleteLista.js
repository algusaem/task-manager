import store from "../redux/store";
import deleteTarea from "./deleteTarea";
import { deleteTask } from "../redux/reducers/tareaSlice";

// Borra la lista con el id elegido.
export default async function deleteLista(lista) {
    const listas = store.getState().lista.listas;
    const chosenList = listas.find(element => element.name === lista);
    const idElegido = chosenList ? chosenList._id : undefined;
    

    await fetch(`https://task-manager-api-five.vercel.app/lists/${idElegido}`, {
        method: 'DELETE'
    });

    deleteTareas(lista);
} 

// Obtiene las tareas linkeadas a la lista y las borra.
async function deleteTareas(lista) {
    const response = await fetch(`https://task-manager-api-five.vercel.app/tasks/${lista}`);
    const data = await response.json();
    data.forEach(element => {
        deleteTarea(element.name);
        store.dispatch(deleteTask(element.name));
    });
}