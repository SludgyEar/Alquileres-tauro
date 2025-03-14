import React, { useState, useEffect } from "react";
import "../styles/login.css";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.isAuth){
      navigate("/dashboard");
    }
  }, [auth.isAuth, navigate]);
  
    const [nombre, setNombre] = useState("");
    const handleNombre = (e) => {
      setNombre(e.target.value);
    };
    const [passwd, setPasswd] = useState("");
    const handlePasswd = (e) => {
      setPasswd(e.target.value);
    };

    const handleLogin = async(e) => {
      e.preventDefault();
      try{
        const res = await axios.get("http://localhost:8000/login", {
          params: {nombre, passwd}
        });
        if(res.status === 200){
          auth.handleUser({nombre, passwd});
          auth.handleAuth(true);
        }
      }catch(err){}
    };

  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleLogin}>
        <h1>Ingresa tu usuario y contraseña</h1>
        <label>Usuario</label>
        <input type="text" name="username" onChange={handleNombre}/>

        <label>Contraseña</label>
        <input type="password" name="password" onChange={handlePasswd}/>
        <input type="submit" value={"Entrar"}/>
      </form>
    </DefaultLayout>
  );
}
export default Login;