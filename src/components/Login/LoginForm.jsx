import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Perform login logic here
    console.log(`Username: ${username} Password: ${password}`);
  }

  return (
    <div className='bg-white w-96 h-80 flex justify-center items-center rounded-md flex-col'>
      <h1 className='text-green-500 text-5xl underline'>Login</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <br/>
        <Input variant="outlined" color="green" label="Usuario" size="lg"
          value={username} onChange={(e) => setUsername(e.target.value)} type='text'
        />
        <br/>
        <Input variant="outlined" color="green" label="Contraseña" type='password' size="lg"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <Button type="submit" className="bg-green-500 transition hover:bg-[#671E8A]" ripple={false} size="md">
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
