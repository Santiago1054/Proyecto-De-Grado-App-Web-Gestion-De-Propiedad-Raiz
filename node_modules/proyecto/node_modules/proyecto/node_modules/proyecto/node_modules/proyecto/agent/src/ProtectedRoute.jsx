import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) return <h1>Loading...</h1>;

    if (!isAuthenticated) {
        // Redirigir al login, y guardar la ubicación original en el estado
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
