import store from "../redux/store";

// Crea una tarea para la lista seleccionada.
export default async function postTarea(content) {
    try {
      const response = await fetch(`https://task-manager-api-five.vercel.app/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listname: store.getState().lista.listaElegida,
            name: content,
        })
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
}