import React from 'react';
import createIcon from '../../../../assets/create-icon.svg'
import deleteIcon from '../../../../assets/delete-icon.svg'

const RightPanel = () => {

  return (
    <div className="w-4/6 h-full float-right bg-gray-200">
      <div className='px-8 my-4 w-full text-center'>
        {/* falta la clase "hidden" para el button cuando no hay ninguna lista seleccionada */}
        <button className='text-3xl text-white bg-[#671E8A] hover:bg-green-500 px-3 rounded-3xl float-right'>+</button>
        <h1 className='text-3xl font-medium text-green-500 inline'>TAREAS</h1>
      </div>
      <ul className=' w-full h-full
      flex flex-col gap-2'>
        <div className='group mx-auto p-4 bg-white w-[90%] h-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
          <li className='text-xl group-hover:text-white inline'><a href='#'>Tarea la que sea</a></li>
          <l1 className='float-right text-xl'><img src={createIcon} className='h-6 ml-4 transform hover:scale-125'/></l1>
          <l1 className='float-right text-xl'><img src={deleteIcon} className='h-6 mx-4 transform hover:scale-125'/></l1>
        </div>
        <div className='group mx-auto p-4 bg-white w-[90%] rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
          <li className='text-xl group-hover:text-white'><a href='#'>Tarea la que sea</a></li>
        </div>
        <div className='group mx-auto p-4 bg-white w-[90%] rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
          <li className='text-xl group-hover:text-white'><a href='#'>Tarea la que sea</a></li>
        </div>
      </ul>
    </div>
  );
}

export default RightPanel;