import { useEffect } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Comprueba si el usuario ha realizado el login y lo redirige.
    if(localStorage.getItem("logged") === "true") {
      navigate("/todo");
    }else{
      localStorage.setItem("logged", false);
    }
  },[]);
    
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <LoginForm/>
    </div>
  );
}

export default Login;