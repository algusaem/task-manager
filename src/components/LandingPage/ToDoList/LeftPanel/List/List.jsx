import React from 'react';
import deleteIcon from "../../../../../assets/delete-icon.svg";
import createIcon from "../../../../../assets/create-icon.svg";
import deleteLista from '../../../../../api/deleteLista';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../../redux/reducers/landingPageSlice';

const List = ({ listName, onClick }) => {
  const dispatch = useDispatch();

  // Delete o Edit de la lista elegida.
  async function handleClick(type) {
    if(type === "delete") {
      await deleteLista(listName);
    }else if(type === "edit") {
      dispatch(setModal("editList"));
    }
  }

  return (
    <div onClick={onClick} className='inline mx-4 p-4 w-full h-fit rounded-md transition'>
      <div className='inline p-4 bg-green-500 w-fit h-fit rounded-md transition hover:bg-[#671E8A] cursor-pointer'>
        <li className='inline text-xl text-center text-white'>
          <a>{ listName }</a>
        </li>
      </div>
      <li onClick={() => {handleClick("delete")}} className='float-right text-xl cursor-pointer'>
        <img src={deleteIcon} className='h-6 mx-4 transform hover:scale-125' />
      </li>
      <li onClick={() => {handleClick("edit")}} className='float-right text-xl cursor-pointer'>
        <img src={createIcon} className='h-6 mx-4 transform hover:scale-125' />
      </li>
    </div>
  );
}

export default List;