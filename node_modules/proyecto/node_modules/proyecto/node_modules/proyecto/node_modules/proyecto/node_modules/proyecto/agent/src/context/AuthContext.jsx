import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Registrar un nuevo usuario
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors([error.response?.data?.message || "Error al registrar"]);
        }
    };

    // Iniciar sesión del usuario
    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            setErrors([error.response?.data?.message || "Error al iniciar sesión"]);
        }
    };

    // Cerrar sesión del usuario
    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    // Limpiar errores automáticamente después de 5 segundos
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => setErrors([]), 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    // Verificar la autenticación al cargar la app
    useEffect(() => {
        async function checkLogin() {
            setLoading(true);
            const token = Cookies.get("token");

            if (!token) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenRequest();
                if (res.status === 200) {
                    setIsAuthenticated(true);
                    setUser(res.data);
                } else {
                    logout();
                }
            } catch (error) {
                logout(); // Si ocurre un error, se cierra la sesión
                console.error("Error verifying token:", error);
            } finally {
                setLoading(false);
            }
        }

        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
