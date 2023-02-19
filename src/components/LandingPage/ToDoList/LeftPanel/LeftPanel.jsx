import React from 'react';
import List from './List/List';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';

//Mock API
import listas from '../../../../mock/listas.json';

const LeftPanel = () => {

  return (
    <div className="w-2/6 h-full float-left">
      <div className='px-8 my-4 w-full'>
        <ListTaskButton />
        <ListTaskTitle titleName="LISTAS"/>
      </div>
      
      <ul className='w-full h-full flex flex-col gap-2'>
        {listas.listas.map((element, key) => (
          <List  listName={element.nombre} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default LeftPanel;