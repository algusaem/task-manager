import React from 'react';

const ListTaskTitle = ({titleName}) => {

  return (
    <h1 className='text-3xl font-medium text-green-500 inline'>
      {titleName}
    </h1>
  );
}

export default ListTaskTitle;