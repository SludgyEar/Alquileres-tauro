import { Outlet, Navigate} from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

export default function ProtectedRoute(){
    const auth = useAuth();

    return auth.isAuth ? <Outlet /> : <Navigate to="/" />;
}