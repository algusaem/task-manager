import React, { useEffect } from 'react';
import List from './List/List';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';
import getListas from '../../../../api/getListas';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setListaElegida } from '../../../../redux/reducers/listaSlice';

const LeftPanel = () => {
  const listas = useSelector(state => state.lista.listas);
  const dispatch = useDispatch();

  // useEffect que se ejecuta 1 vez al montar el componente.
  // Inicializa la creación de las listas mediante una llamada a la API.
  useEffect(() => {
    getListas(localStorage.getItem("username"));
  }, [listas])

  // Guarda la lista elegida en un estado de Redux.
  const handleClick = (nombre) => {
    dispatch(setListaElegida({nombre}))
  }

  const buttonHandleClick = () => {
    alert("Mostrar un modal refachero");
  }

  return (
    <div className="w-2/6 h-full float-left">
      <div className='px-8 my-4 w-full'>
        <ListTaskButton onClick={() => {buttonHandleClick()}} />
        <ListTaskTitle titleName="LISTAS"/>
      </div>
      
      <ul className='w-full h-full flex flex-col gap-2'>
        {listas.map((element, key) => (
          <List  listName={element.name} key={key} onClick={() => handleClick(element.name)} />
        ))}
      </ul>
    </div>
  );
}

export default LeftPanel;