import { useContext, createContext, useState } from "react";

const AuthContext = createContext({
    isAuth: false,
    handleAuth: () => {},
    user: {},
    handleUser: () => {},
    isAdmin: false,
    handleSetAdmin: () => {},
});

export function AuthProvider({ children }) {
    // Manejo de autenticación
    const [isAuth, setIsAuth] = useState(false);
    const handleAuth = (state = true) => {
        setIsAuth(state);
    };
    // Manejo de usuario
    const [user, setUser] = useState({});
    const handleUser = (user) => {
        setUser(user);
    };
    // Manejo de administrador
    const [isAdmin, setIsAdmin] = useState(false);
    const handleSetAdmin = (state = true) => {
        setIsAdmin(state);
    };

    return(
        <AuthContext.Provider value={{ isAuth, handleAuth, user, handleUser, isAdmin, handleSetAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);