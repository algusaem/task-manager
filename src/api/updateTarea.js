// Edita la tarea con el nombre elegido.
export default async function updateTarea(name, updatedData) {
    const response = await fetch(`https://task-manager-api-five.vercel.app/tasks/name/${name}`, {
      method: 'PUT',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    return data;
}  