import React from 'react';
import '../styles/dashboard.css';
import { useAuth } from '../Providers/AuthProvider';

const Dashboard = () => {
    const auth = useAuth();
    return (
        <div>
            <div>Bienvenido seas</div>  {/* Un menu para escoger qué servicio se va a cargar */}
            <div>usuario</div>  {/* P.ejmplo: <Inventario/> de manera que puedan acceder a esa pestaña haciendo clic */}
            <div>{auth.user.NOMBREUSR}</div>
        </div>
    );
};

export default Dashboard;