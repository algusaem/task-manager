import React, { useState } from 'react';
import deleteIcon from '../../../../../assets/delete-icon.svg';
import createIcon from '../../../../../assets/create-icon.svg'
import deleteTareas from '../../../../../api/deleteTarea';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../../redux/reducers/landingPageSlice';
import { setTareaElegida } from '../../../../../redux/reducers/tareaSlice';

const Task = ({ taskName }) => {
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch();

  // Al clicar llama al DELETE de la API.
  // En caso de ser EDIT, llama al modal.
  const handleClick = (type) => {
    if(type === "delete") {
      deleteTareas(taskName);
      setDeleted(true);
    }else if(type === "edit") {
      dispatch(setModal("editTask"));
      dispatch(setTareaElegida(taskName));
    }
  };

  return (
    <div className={`group mx-auto p-4 bg-white w-[90%] h-fit rounded-md transition hover:bg-[#671E8A] ${deleted ? 'hidden' : ''}`}>
      <div className='flex justify-between'>
        <li className='text-xl group-hover:text-white inline'>
          <input placeholder={taskName} className='bg-white group-hover:bg-[#671E8A] group-hover:placeholder:text-white placeholder:text-black transition focus:outline-none' disabled/>
        </li>
        <div className='flex'>
          <li onClick={() => {handleClick("edit")}} className='cursor-pointer'>
            <img src={createIcon} className='h-6 mx-4 transform hover:scale-125' />
          </li>
          <li onClick={() => handleClick("delete")} className='cursor-pointer'>
            <img src={deleteIcon} className='h-6 mx-4 transform hover:scale-125' />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Task;
