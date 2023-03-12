// Crea una lista para el usuario almacenado en el localStorage.
export default async function postLista(content) {
    try {
      const response = await fetch(`https://task-manager-api-five.vercel.app/lists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: localStorage.getItem('username'),
          name: content
        })
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
}