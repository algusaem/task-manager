import { useSelector, useDispatch } from "react-redux";
import { instrucciones } from "../../redux/reducers/landingPageSlice";

const Instrucciones = () => {
    const instruccionesToggle = useSelector(state => state.landingPage.instrucciones);
    const dispatch = useDispatch();

    // Cierra el modal al clicar fuera.
    const handleCloseModal = () => {
        dispatch(instrucciones()); 
    };

    if(instruccionesToggle === true) {
        return(
            <div className="fixed z-50 mx-auto inset-0 flex justify-center items-center bg-black bg-opacity-50" onClick={handleCloseModal}>
                <div className="w-screen max-w-md md:h-auto" onClick={e => e.stopPropagation()}>
                    <div className="bg-white rounded-lg shadow dark:bg-gray-700 p-4 text-justify"> 
                        <h1 className="text-3xl font-medium text-green-500 text-center m-4">Instrucciones</h1>
                        <ul>
                            <li className="m-4 font-medium text-xl text-[#671E8A]">Entra con tu cuenta o crea una nueva. ¡Es fácil y rápido!</li>
                            <li className="m-4 font-medium text-xl text-[#671E8A]">Una vez dentro, en el panel de la izquierda verás un símbolo +. ¡Clícalo para crear una nueva lista!</li>
                            <li className="m-4 font-medium text-xl text-[#671E8A]">Ahora verás un nuevo botón en el panel izquierdo, clícalo para entrar en la lista que acabas de crear.</li>
                            <li className="m-4 font-medium text-xl text-[#671E8A]">Crea una nueva tarea con el botón + de arriba a la izquierda.</li>
                            <li className="m-4 font-medium text-xl text-[#671E8A]">¡Recuerda que puedes borrar y editar las listas y tareas con los botones de editar y borrar que se encuentran a los lados!</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Instrucciones;