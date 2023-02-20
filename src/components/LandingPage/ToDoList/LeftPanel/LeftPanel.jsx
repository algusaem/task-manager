import React from 'react';
import List from './List/List';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';
import { useSelector } from 'react-redux';

const LeftPanel = () => {
  const listas = useSelector(state => state.lista);

  return (
    <div className="w-2/6 h-full float-left">
      <div className='px-8 my-4 w-full'>
        <ListTaskButton />
        <ListTaskTitle titleName="LISTAS"/>
      </div>
      
      <ul className='w-full h-full flex flex-col gap-2'>
        {listas.map((element, key) => (
          <List  listName={element.nombre} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default LeftPanel;