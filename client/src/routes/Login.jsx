import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useAuth } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import DefaultLayout from "../layout/DefaultLayout";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuth) {
      navigate("/dashboard");
    }
  }, [auth.isAuth, auth.isAdmin, auth.user, navigate]);

  const [nombre, setNombre] = useState("");
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const [passwd, setPasswd] = useState("");
  const handlePasswd = (e) => {
    setPasswd(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", { nombre: nombre, passwd: passwd });
      if(res.status === 201){
        auth.handleUser(res.data);
        auth.handleAuth(true);
        if(res.data.ADMINUSR === '1'){
          auth.handleSetAdmin(true);
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setShForm(prev => !prev);
      }
     }
  };

  const [shForm, setShForm] = useState(true);

  return (
    <DefaultLayout>
      {(shForm) ? (
        <div className="login-box">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa tu usuario"
              required
              onChange={handleNombre}
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="passwd"
              placeholder="Ingresa tu contraseña"
              required
              onChange={handlePasswd}
            />

            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      ) : (
        <div className="error">
          <h1>Acceso Negado</h1>
          <p>Corrobora tus credenciales.</p>
          <button onClick={() => setShForm(prev => !prev)}>Cerrar</button>
        </div>
      )}
    </DefaultLayout>

  );
}
export default Login;