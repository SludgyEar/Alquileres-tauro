import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Register from './routes/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import Paquete from './routes/Paquete';
import { AuthProvider } from './Providers/AuthProvider';
import Inventario from './routes/Inventario';
import Test from './routes/Test';
import DefaultLayout from './layout/DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/paquete',
    element: <Paquete/>
  },  // Ruta agregada provicionalmente para visualizar los cambios en el componente. No se muestra porque es parte de un menú
  {
    path: '/test',
    element: <Test />
  },  // Ruta de pruebas para visualizar cambios en un componente aparte.
  {
    path: '/inventario',
    element: <Inventario/>
  },  // Ruta agregada provicionalmente para visualizar los cambios en el componente. No se muestra porque es parte de un menú
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
