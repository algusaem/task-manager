import store from "../redux/store";
import { initUsuario } from "../redux/reducers/usuarioSlice";

// Comprueba que el usuario exista en la base de datos.
export default async function getLogin(username, password) {
    const response = await fetch('https://task-manager-api-five.vercel.app/users');
    const data = await response.json();
    const user = data.find((obj) => obj.username === username && obj.password === password);

    // Si el usuario y contraseña son encontrados, los almacena en la store.
    // Guarda también el usuario en localStorage.
    if (user) {
        const { _id, username, password } = user;
        const userData = { id: _id, username, password };
        localStorage.setItem("username", username);
        store.dispatch(initUsuario(userData));
        return true;
    } else {
        alert("Usuario no encontrado. Si quieres entrar cómo invitado utiliza el usuario: invitado y la contraseña: invitado")
        return false;
    }
}