// Crea un usuario.
export default async function postUsuario(username, password) {
    try {
      const response = await fetch(`https://task-manager-api-five.vercel.app/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
      });
      
      const data = await response.json();
      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
}