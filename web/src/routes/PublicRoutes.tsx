import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};
