// Borra la tarea con el nombre elegido.
export default async function deleteTarea(name) {
    const response = await fetch(`https://task-manager-api-five.vercel.app/tasks/${name}`, {
        method: 'DELETE'
    });
    const data = await response.json();
}  