import store from "../redux/store";

// Borra la lista con el id elegido.
export default async function deleteLista(lista) {
    const listas = store.getState().lista.listas;
    let idElegido;

    listas.forEach(element => {
        if(element.name === lista) {
            idElegido = element._id;
        }
    });

    const response = await fetch(`https://task-manager-api-five.vercel.app/lists/${idElegido}`, {
        method: 'DELETE'
    });
    const data = await response.json();
}  