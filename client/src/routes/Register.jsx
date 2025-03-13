import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';

const Register = () => {
    return (
    <DefaultLayout>
      <form className="form">
        <h1>Ingresa tu usuario y contraseña</h1>
        <label>Usuario</label>
        <input type="text" name="username" />

        <label>Contraseña</label>
        <input type="password" name="password" />
        <button>Registrar</button>
      </form>
    </DefaultLayout>
    );
};

export default Register;