import { Button, Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { unsetModal } from "../../../redux/reducers/landingPageSlice";
import React, { useRef, useEffect, useState } from 'react';
import postLista from "../../../api/postLista";
import postTarea from "../../../api/postTarea";

const ToDoModal = () => {
    const [inputValue, setInputValue] = useState('');
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const modal = useSelector(state => state.landingPage);
    
    // useEffect para detectar el click fuera del modal y cerrarlo.
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                dispatch(unsetModal());
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);

    // Dependiendo del botón clicado llama a un POST u otro.
    async function handleClick(type) {
        const input = inputValue;

        if(type === "list") {
            await postLista(input);

        }else if(type === "task") {
            await postTarea(input);
        }

        // Cierra el modal.
        dispatch(unsetModal());
    }

    // Si el estado "show" del modal es true, lo muestra.
    // Además obtiene qué mostrar por medio del estado content.
    if(modal.show === true){
        switch(modal.content) {
            case "list":
                return(
                    <div className="fixed z-50 mx-auto inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="w-screen h-screen max-w-md md:h-auto">
                            <div ref={modalRef} id="modalContent" className="bg-white rounded-lg shadow dark:bg-gray-700 p-4"> 
                                <h1 className="text-3xl font-medium text-green-500 text-center m-4">Nueva Lista</h1>
                                <form className="w-full flex flex-col items-center">
                                    <Input variant="outlined" color="green" size="lg" className="w-6 text-center" placeholder="Nombre de la lista" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                                    <Button onClick={() => {handleClick(modal.content)}} className="mx-auto mt-4 hover:bg-[#671E8A] transition" color="green">Enviar</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                );
    
            case "task":
                return(
                    <div className="fixed z-50 mx-auto inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="w-screen h-screen max-w-md md:h-auto">
                            <div ref={modalRef} id="modalContent" className="bg-white rounded-lg shadow dark:bg-gray-700 p-4"> 
                                <h1 className="text-3xl font-medium text-green-500 text-center m-4">Nueva Tarea</h1>
                                <form className="w-full flex flex-col items-center">
                                    <Input variant="outlined" color="green" size="lg" className="w-6 text-center" placeholder="Nombre de la tarea" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                                    <Button onClick={() => {handleClick(modal.content)}} className="mx-auto mt-4 hover:bg-[#671E8A] transition" color="green">Enviar</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                );
        }
    }
}

export default ToDoModal;