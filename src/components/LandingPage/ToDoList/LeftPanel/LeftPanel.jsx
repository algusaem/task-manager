import React from 'react';
import List from './List/List';
import ListTaskButton from '../ListTaskButton';
import ListTaskTitle from '../ListTaskTitle';

const LeftPanel = () => {

  return (
    <div className="w-2/6 h-full float-left">
      <div className='px-8 my-4 w-full'>
        <ListTaskButton />
        <ListTaskTitle titleName="LISTAS"/>
      </div>
      
      <ul className='w-full h-full flex flex-col gap-2'>
        <List listName={"Lista número 1"}/>
        <List listName={"Lista número 2"}/>
        <List listName={"Lista número 3"}/>
      </ul>
    </div>
  );
}

export default LeftPanel;