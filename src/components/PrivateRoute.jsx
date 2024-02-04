import React from 'react';
import { Navigate } from 'react-router-dom';
import getLocal from '../helper/Auth';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ element, accessType }) => {
    const response = getLocal();

    if (response) {
        const decoded_token = jwtDecode(response);
        if (accessType === 'employer' && decoded_token.role === 'Employer') {
            return element;
        } else if (accessType === 'user' && decoded_token.role !== 'Employer') {
            return element;
        } else if (accessType === 'user' && decoded_token.role === 'Employer') {
            return <Navigate to="/employer/dashboard/" />
        } else {
            return <Navigate to="/" />;
        }
    } else {
        if (accessType === 'user') {
            return element;
        }
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;