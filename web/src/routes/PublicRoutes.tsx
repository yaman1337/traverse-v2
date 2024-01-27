import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />

            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};
