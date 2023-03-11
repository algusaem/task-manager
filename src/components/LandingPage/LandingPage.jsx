import React, { useEffect } from 'react';
import ToDoList from './ToDoList/ToDoList';
import NavBar from './NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Comprueba si el usuario ha realizado el login y lo redirige.
    if(!localStorage.getItem("username")) {
      navigate("/");
    }
  },[]);

  return (
    <div className='w-full h-full bg-white'>
      <NavBar/>
      <ToDoList/>
    </div>
  );
}

export default LandingPage;
