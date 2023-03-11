import React from 'react';

const ListTaskButton = (props) => {

  return (
    <button className='text-3xl text-white bg-[#671E8A] hover:bg-green-500 px-3 rounded-3xl float-right'
    onClick={props.onClick}>
      +
    </button>
  );
}

export default ListTaskButton;