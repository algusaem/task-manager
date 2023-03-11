import { Button, Input } from "@material-tailwind/react";

const ToDoModal = (name) => {
    switch(name) {
        case "list":
            break;
        case "task":
            break;
        default:
            break;
    }

    return(
        <div className="fixed z-50 mx-auto inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative w-screen h-screen max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <h1 className="text-center">Nueva Lista</h1>
                    <br/>
                    <form className="">
                        <Input className="text-center" placeholder="Nombre de la lista"/>
                        <br/>
                        <Button className="mx-auto">Enviar</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ToDoModal;