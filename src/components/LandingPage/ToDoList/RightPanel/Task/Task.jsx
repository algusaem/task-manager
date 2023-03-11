import React from 'react';
import deleteIcon from '../../../../../assets/delete-icon.svg';

const Task = ({ taskName }) => {

  return (
    <div className='group mx-auto p-4 bg-white w-[90%] h-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
      <li className='text-xl group-hover:text-white inline'>
        <input placeholder={taskName} className='group-hover:bg-[#671E8A] group-hover:placeholder:text-white placeholder:text-black transition focus:outline-none'/>
      </li>
      <li className='float-right text-xl'><img src={deleteIcon} className='h-6 mx-4 transform hover:scale-125'/></li>
    </div>
  );
}

export default Task;