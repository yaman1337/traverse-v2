import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardLayout from '../Pages/Dashboard/DashboardLayout';

export default function PrivateRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='dashboard' element={<DashboardLayout element={<Dashboard />} />} />

        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
    </>
  );
}
