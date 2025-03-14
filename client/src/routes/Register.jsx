import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

const Register = () => {

  const navigate = useNavigate();
  const auth = useAuth();

  const [user, setUser] = useState({});
  const handleUser = (e) => {
    setUser(prev => ({...prev, [e.target.name]:e.target.value}));
  };

  useEffect(() => {
    if(auth.isAuth){
      navigate("/dashboard");
    }
  }, [auth.isAuth ]);

  const handleCreateUser = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8000/register", user);
      if(res.status === 201){
        auth.handleUser(user);
        auth.handleAuth(true);
      }
    }catch(err){}
  };

    return (
    <DefaultLayout>
      <form className="form" onSubmit={handleCreateUser}>
        <h1>Ingresa tu usuario y contraseña</h1>
        <label>Usuario</label>
        <input type="text" name="username" onChange={handleUser}/>

        <label>Contraseña</label>
        <input type="password" name="password" onChange={handleUser}/>
        <input type="submit" value={"Registar"} />
      </form>
    </DefaultLayout>
    );
};

export default Register;