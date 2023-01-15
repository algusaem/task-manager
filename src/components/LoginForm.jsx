import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Perform login logic here
    console.log(`Username: ${username} Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Usuario' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input 
            type='password' 
            placeholder='Contraseña' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Inicia Sesión</button>
    </form>
  );
}

export default LoginForm;
