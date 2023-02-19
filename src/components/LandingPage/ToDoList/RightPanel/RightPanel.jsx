import React from 'react';
import Task from './Task/Task';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';

const RightPanel = () => {

  return (
    <div className="w-4/6 h-full float-right bg-gray-200">
      <div className='px-8 my-4 w-full text-center'>
        {/* falta la clase "hidden" para el button cuando no hay ninguna lista seleccionada */}
        <ListTaskButton />
        <ListTaskTitle titleName="TAREAS"/>
      </div>
      <ul className=' w-full h-full flex flex-col gap-2'>
        <Task taskName={"Tarea número 1"}></Task>
        <Task taskName={"Tarea número 2"}></Task>
        <Task taskName={"Tarea número 3"}></Task>
      </ul>
    </div>
  );
}

export default RightPanel;