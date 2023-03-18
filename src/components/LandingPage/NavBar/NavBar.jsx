import React from 'react';
import { useDispatch } from 'react-redux';
import { instrucciones } from '../../../redux/reducers/landingPageSlice';
import { toggleModal } from '../../../redux/reducers/loginSlice';
import NavBarListItem from './NavBarListItem';

function NavBar(type) {
  const dispatch = useDispatch();

  // En caso de que el objeto clicado sea Registrarse, llama al modal de registro.
  const handleClick = () => {
    dispatch(toggleModal());
  }

  // Muestra el modal de instrucciones.
  const toggleInstrucciones = () => {
    dispatch(instrucciones());
  }

  if(type.type === "landing") {
    return (
      <ul className='flex justify-center w-full h-auto fixed top-0 border-b border-white py-3 bg-green-500'>
        <NavBarListItem listItemName="Instrucciones" hRef={'#'} onClick={toggleInstrucciones}/>
        <NavBarListItem listItemName="Github" hRef={'https://github.com/algusaem/task-manager'}/>
        <NavBarListItem listItemName="Cerrar Sesión" hRef={'#'}/>
      </ul>
    );
  }else if(type.type === "login") {
    return (
      <ul className='flex justify-center w-full h-auto fixed top-0 border-b border-white py-3 bg-green-500'>
        <NavBarListItem listItemName="Instrucciones" hRef={'#'} onClick={toggleInstrucciones}/>
        <NavBarListItem listItemName="Github" hRef={'https://github.com/algusaem/task-manager'}/>
        <NavBarListItem onClick={handleClick} listItemName="Registrarse" hRef={'#'}/>
      </ul>
    );
  }
}

export default NavBar;
