import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');

    // Si no hay token, redirige al inicio de sesión
    if (!token) {
        return <Navigate to="/login" />;

    }

    // Si hay token, renderiza el componente hijo
    return <Outlet />;
};

export default PrivateRoute;
