import React, { useEffect } from 'react';
import Task from './Task/Task';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';
import { useDispatch, useSelector } from 'react-redux';
import getTareas from '../../../../api/getTareas';
import { setModal } from '../../../../redux/reducers/landingPageSlice';

const RightPanel = () => {
  const dispatch = useDispatch();
  const listaElegida = useSelector(state => state.lista.listaElegida);
  const tareas = useSelector(state => state.tarea.tareas);
  
  useEffect(() => {
    getTareas(listaElegida);
  },[listaElegida]);

  // Muestra el modal de tareas.
  const buttonHandleClick = () => {
    dispatch(setModal("task"));
  }

  return (
    <div className="w-4/6 h-full float-right bg-gray-200 overflow-y-scroll">
      <div className='px-8 my-4 w-full text-center'>

        {/* Si hay una lista elegida, muestra el botón de añadir nueva tarea. */}
        { listaElegida ? <ListTaskButton onClick={() => {buttonHandleClick()}}/> : null }
        <ListTaskTitle titleName="TAREAS"/>
      </div>
      <ul className=' w-full h-fit flex flex-col gap-2'>
        
        {/* Llamar a la api de tareas */}
        { tareas.map((element, key) => (
          <Task taskName={element.name} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default RightPanel;