import React from 'react';

function NavBar() {

  return (
    <ul className='flex justify-center w-full h-auto fixed top-0 border-b border-white py-3'>
      <li className='mx-3'><a href='http://localhost:3000/' className='font-semibold text-white text-xl transition hover:text-[#671E8A]'>Inicio</a></li>
      <li className='mx-3'><a href='http://localhost:3000/' className='font-semibold text-white text-xl transition hover:text-[#671E8A]'>Instrucciones</a></li>
      <li className='mx-3'><a href='http://localhost:3000/' className='font-semibold text-white text-xl transition hover:text-[#671E8A]'>Github</a></li>
      <li className='mx-3'><a href='http://localhost:3000/' className='font-semibold text-white text-xl transition hover:text-[#671E8A]'>Salir</a></li>
    </ul>
  );
}

export default NavBar;