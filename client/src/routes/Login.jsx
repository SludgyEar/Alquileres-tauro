import React from "react";
import "../styles/login.css";
import DefaultLayout from "../layout/DefaultLayout";

function Login() {
  return (
    <DefaultLayout>
      <form className="form">
        <h1>Ingresa tu usuario y contraseña</h1>
        <label>Usuario</label>
        <input type="text" name="username" />

        <label>Contraseña</label>
        <input type="password" name="password" />
        <button>Acceder</button>
      </form>
    </DefaultLayout>
  );
}
export default Login;