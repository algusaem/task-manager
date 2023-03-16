import { useEffect } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import NavBar from "../LandingPage/NavBar/NavBar";
import RegisterModal from './RegisterModal';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Comprueba si el usuario ha realizado el login y lo redirige.
    if(localStorage.getItem("username")) {
      navigate("/todo");
    }
  },[]);
    
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <NavBar type="login"/>
      <LoginForm/>
      <RegisterModal/>
    </div>
  );
}

export default Login;