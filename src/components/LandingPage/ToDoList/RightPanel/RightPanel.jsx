import React from 'react';
import Task from './Task/Task';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';

//Mock API
import listas from '../../../../mock/listas.json';

const RightPanel = () => {
  
  return (
    <div className="w-4/6 h-full float-right bg-gray-200">
      <div className='px-8 my-4 w-full text-center'>
        {/* falta la clase "hidden" para el button cuando no hay ninguna lista seleccionada */}
        <ListTaskButton />
        <ListTaskTitle titleName="TAREAS"/>
      </div>
      <ul className=' w-full h-full flex flex-col gap-2'>
          {listas.listas[0].tareas.map((element, key) => (
            <Task  taskName={element} key={key}></Task>
          ))}
      </ul>
    </div>
  );
}

export default RightPanel;