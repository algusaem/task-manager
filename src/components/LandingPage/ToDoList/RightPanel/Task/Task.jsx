import React, { useState } from 'react';
import deleteIcon from '../../../../../assets/delete-icon.svg';
import createIcon from '../../../../../assets/create-icon.svg'
import deleteTareas from '../../../../../api/deleteTarea';

const Task = ({ taskName }) => {
  const [deleted, setDeleted] = useState(false);

  // Al clicar llama al DELETE de la API.
  const handleClick = (type) => {
    if(type === "delete") {
      deleteTareas(taskName);
      setDeleted(true);
    }else if(type === "edit") {
      console.log("editao");
    }
  };

  // TO-DO
  const handleSubmit = () => {
    console.log(taskName);
    // TO-DO
  }

  return (
    <div className={`group mx-auto p-4 bg-white w-[90%] h-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer ${deleted ? 'hidden' : ''}`}>
      <li className='text-xl group-hover:text-white inline'>
        <input placeholder={taskName}
        onSubmit={() => {handleSubmit()}}
        className='group-hover:bg-[#671E8A] group-hover:placeholder:text-white placeholder:text-black transition focus:outline-none'/>
      </li>
      <li onClick={() => handleClick("delete")} className='float-right text-xl'>
        <img src={deleteIcon} className='h-6 mx-4 transform hover:scale-125' />
      </li>
      <li onClick={() => {handleClick("edit")}} className='float-right text-xl'>
        <img src={createIcon} className='h-6 mx-4 transform hover:scale-125' />
      </li>
    </div>
  );
};

export default Task;
