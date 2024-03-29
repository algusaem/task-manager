import React from 'react';
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

function ToDoList() {

  return (
    <div className='flex mt-12 lg:mt-0 justify-center lg:items-center w-full h-full bg-green-500'>
      <div className='w-[90rem] h-[40rem] bg-white rounded-md'>
        <LeftPanel/>
        <RightPanel/>
      </div>
    </div>
  );
}

export default ToDoList;