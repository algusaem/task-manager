import React from 'react';
import ToDoList from './ToDoList/ToDoList';
import NavBar from './NavBar/NavBar';

function LandingPage() {

  return (
    <div className='w-full h-full bg-white'>
      <NavBar/>
      <ToDoList/>
    </div>
  );
}

export default LandingPage;
