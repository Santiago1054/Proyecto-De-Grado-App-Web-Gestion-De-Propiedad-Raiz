import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)
    const singup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }

    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            console.log(error)
            if (Array.isArray(error.response.data)) {
                console.log(error)
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])

        }

    }
    const logout = () => {
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)

    }
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }

    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            setLoading(true); // Añadimos esto para evitar flashes de contenido mientras se verifica
            const cookies = Cookies.get();
            
            if (!cookies.token) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
                return;
            }
    
            try {
                const res = await verifyTokenRequest();
                if (res.status === 200 && res.data) {
                    setIsAuthenticated(true);
                    setUser(res.data);
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                    Cookies.remove("token"); // Limpia el token en caso de fallo
                }
            } catch (error) {
                console.log("Error verifying token:", error);
                setIsAuthenticated(false);
                setUser(null);
                Cookies.remove("token");
            } finally {
                setLoading(false);
            }
        }
    
        checkLogin();
    }, []);


    return (
        <AuthContext.Provider value={{
            singup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
} 