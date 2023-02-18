import React from 'react';

const LeftPanel = () => {

  return (
    <div className="w-2/6 h-full float-left">
      <div className='px-8 my-4 w-full'>
        <button className='text-3xl text-white inline bg-[#671E8A] hover:bg-green-500 px-3 rounded-3xl float-right'>+</button>
        <h1 className='text-3xl font-medium text-green-500 inline'>LISTAS</h1>
      </div>
      
      <ul className='w-full h-full flex flex-col gap-2'>
        <div className='mx-8 p-4 bg-green-500 w-fit h-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
          <li className='text-xl text-center text-white'><a href='#'>Lista la que sea</a></li>
        </div>
        <div className='mx-8 p-4 bg-green-500 w-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
          <li className='text-xl text-center text-white'><a href='#'>Lista la que sea</a></li>
        </div>
        <div className='mx-8 p-4 bg-green-500 w-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
          <li className='text-xl text-center text-white'><a href='#'>Lista la que sea</a></li>
        </div>
      </ul>
    </div>
  );
}

export default LeftPanel;