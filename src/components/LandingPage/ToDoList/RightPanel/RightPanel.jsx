import React from 'react';
import Task from './Task/Task';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';
import { useSelector } from 'react-redux';

const RightPanel = () => {
  const listas = useSelector(state => state.lista.listas);
  const listaElegida = useSelector(state => state.lista.listaElegida);



  return (
    <div className="w-4/6 h-full float-right bg-gray-200 overflow-y-scroll">
      <div className='px-8 my-4 w-full text-center'>

        {/* Si hay una lista elegida, muestra el botón de añadir nueva tarea. */}
        {listaElegida ? <ListTaskButton /> : null}
        <ListTaskTitle titleName="TAREAS"/>
      </div>
      <ul className=' w-full h-full flex flex-col gap-2 '>
        {listas.map((lista) => {

          // Si encuentra la lista elegida en la base de datos de listas, muestra sus tareas.
          if (lista.nombre === listaElegida) {
            return lista.tareas.map((tarea, index) => (
              <Task taskName={tarea} key={index} />
            ));
          }
        })}
      </ul>
    </div>
  );
}

export default RightPanel;