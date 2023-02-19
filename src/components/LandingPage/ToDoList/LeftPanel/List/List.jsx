import React from 'react';

const List = ({ listName }) => {

  return (
    <div className='mx-8 p-4 bg-green-500 w-fit h-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
        <li className='text-xl text-center text-white'><a href='#'>{ listName }</a></li>
    </div>
  );
}

export default List;