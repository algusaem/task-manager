import React from 'react';

function NavBar_ListItem({listItemName, hRef}) {

  return (
    <li className='mx-3'>
      <a href={hRef} className='font-semibold text-white text-xl transition hover:text-[#671E8A]'>
        {listItemName}
      </a>
    </li>
  );
}

export default NavBar_ListItem;