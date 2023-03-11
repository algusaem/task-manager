import React from 'react';

function NavBar_ListItem({listItemName, hRef}) {

  // Al hacer submit comprueba el login.
  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("logged", false);
    window.location.reload();
  }
  
  // Si el botón renderizado es "Salir", las propiedades serán diferentes.
  return (
    <li className='mx-3'>
      {listItemName === "Cerrar Sesión" ? (
        <a onClick={handleSubmit} className="className='font-semibold text-white text-xl transition hover:text-[#671E8A] cursor-pointer">
          {listItemName}
        </a>
      ) : (
        <a href={hRef} className="className='font-semibold text-white text-xl transition hover:text-[#671E8A]">
          {listItemName}
        </a>
      )}
    </li>
  );
}

export default NavBar_ListItem;