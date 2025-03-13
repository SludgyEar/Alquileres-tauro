import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="container-login">
        <h1 className="title-login">Ingresa tu usuario y contraseña</h1>
        <form >
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="submit" />
        </form>
        <footer className="footer-login">
            <strong>
                Registrar usuario
                Alquileres Tauro: 442-123-4567
            </strong>
        </footer>
    </div>
  );
}
export default Login;