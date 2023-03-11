import React from 'react';
import NavBar_ListItem from './NavBar_ListItem';

function NavBar() {

  return (
    <ul className='flex justify-center w-full h-auto fixed top-0 border-b border-white py-3'>
      <NavBar_ListItem listItemName="Instrucciones" hRef={'#'}/>
      <NavBar_ListItem listItemName="Github" hRef={'https://github.com/algusaem/task-manager'}/>
      <NavBar_ListItem listItemName="Cerrar Sesión" hRef={'#'}/>
    </ul>
  );
}

export default NavBar;