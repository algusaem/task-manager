// Edita la tarea con el nombre elegido.
export default async function updateTarea(name, updatedData) {
  const response = await fetch(`https://task-manager-api-five.vercel.app/tasks/name/${name}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: updatedData })
  });
  const data = await response.json();
  return data;
}  