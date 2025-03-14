import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

const Register = () => {

  const navigate = useNavigate();
  const auth = useAuth();

  const [nombre, setNombre] = useState("");
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const [passwd, setPasswd] = useState("");
  const handlePasswd = (e) => {
    setPasswd(e.target.value);
  };

  useEffect(() => {
    if(auth.isAuth){
      navigate("/dashboard");
    }
  }, [auth.isAuth, navigate]);

  const handleCreateUser = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8000/register", {nombre, passwd});
      if(res.status === 201){
        auth.handleUser({nombre, passwd});
        auth.handleAuth(true);
      }
    }catch(err){}
  };

    return (
    <DefaultLayout>
      <form className="form" onSubmit={handleCreateUser}>
        <h1>Ingresa tu usuario y contraseña</h1>
        <label>Usuario</label>
        <input type="text" name="username" onChange={handleNombre}/>

        <label>Contraseña</label>
        <input type="password" name="password" onChange={handlePasswd}/>
        <input type="submit" value={"Registrar"}/>
      </form>
    </DefaultLayout>
    );
};

export default Register;