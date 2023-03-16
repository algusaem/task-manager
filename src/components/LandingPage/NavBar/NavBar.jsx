import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../redux/reducers/loginSlice';
import NavBar_ListItem from './NavBar_ListItem';

function NavBar(type) {
  const dispatch = useDispatch();

  // En caso de que el objeto clicado sea Registrarse, llama al modal de registro.
  const handleClick = () => {
    dispatch(toggleModal());
  }

  if(type.type === "landing") {
    return (
      <ul className='flex justify-center w-full h-auto fixed top-0 border-b border-white py-3'>
        <NavBar_ListItem listItemName="Instrucciones" hRef={'#'}/>
        <NavBar_ListItem listItemName="Github" hRef={'https://github.com/algusaem/task-manager'}/>
        <NavBar_ListItem listItemName="Cerrar Sesión" hRef={'#'}/>
      </ul>
    );
  }else if(type.type === "login") {
    return (
      <ul className='flex justify-center w-full h-auto fixed top-0 border-b border-white py-3'>
        <NavBar_ListItem listItemName="Instrucciones" hRef={'#'}/>
        <NavBar_ListItem listItemName="Github" hRef={'https://github.com/algusaem/task-manager'}/>
        <NavBar_ListItem onClick={handleClick} listItemName="Registrarse" hRef={'#'}/>
      </ul>
    );
  }
}

export default NavBar;
