import store from "../redux/store";
import { setListaElegida } from "../redux/reducers/listaSlice";

// Edita la lista con el id elegido.
export default async function updateLista(id, newName) {
    const response = await fetch(`https://task-manager-api-five.vercel.app/lists/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newName })
    });

    const data = await response.json();
    let nombre = newName;
    updateListname(nombre);
    store.dispatch(setListaElegida(nombre));
    return data;
}

// Obtiene las tareas linkeadas a la lista y las borra.
async function updateListname(newListname) {
    const oldListname = store.getState().lista.listaElegida;
    const response = await fetch(`https://task-manager-api-five.vercel.app/tasks/listname/${oldListname}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newListname: newListname })
    });
    const data = await response.json();
    return data;
}