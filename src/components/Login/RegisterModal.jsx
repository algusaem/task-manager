import { useSelector } from "react-redux";
import { Input, Button } from "@material-tailwind/react";

const RegisterModal = () => {
    const showModal = useSelector(state => state.login.modal);

    if(showModal) {
        return(
            <div className="fixed z-50 mx-auto inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="w-screen h-screen max-w-md md:h-auto">
                <div className="bg-white rounded-lg shadow dark:bg-gray-700 p-4"> 
                    <h1 className="text-3xl font-medium text-green-500 text-center m-4">Registro</h1>
                    <form className="w-full flex flex-col items-center">
                        <Input variant="outlined" color="green" size="lg" className="w-6 text-center" placeholder="Usuario"/>
                        <br/>
                        <Input variant="outlined" color="green" size="lg" className="w-6 text-center" placeholder="Contraseña"/>  
                        <Button className="mx-auto mt-4 hover:bg-[#671E8A] transition" color="green">Enviar</Button>
                    </form>
                </div>
            </div>
        </div>
        );
    }

}

export default RegisterModal;