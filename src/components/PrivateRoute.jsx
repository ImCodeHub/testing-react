import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAthenticated = !!localStorage.getItem("access_token");
    return isAthenticated ? children : <Navigate to="/" replace />
}

export default PrivateRoute;