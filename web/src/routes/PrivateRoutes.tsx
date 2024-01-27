import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardLayout from '../Pages/Dashboard/DashboardLayout';
import Favorites from '../Pages/Dashboard/Favorites/Favorites';
import Reviews from '../Pages/Dashboard/Reviews/Reviews';
import Contribute from "../Pages/Dashboard/Contribute/Contribute"
import Accounts from '../Pages/Dashboard/Settings/Account/Account';
import ChangePassword from '../Pages/Dashboard/Settings/Password/ChangePassword';
import Rewards from '../Pages/Dashboard/Rewards/Rewards';

export default function PrivateRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='dashboard' element={<DashboardLayout element={<Dashboard />} />} />
        <Route path='dashboard/favorites' element={<DashboardLayout element={<Favorites />} />} />
        <Route path='dashboard/reviews' element={<DashboardLayout element={<Reviews />} />} />
        <Route path='dashboard/contribute' element={<DashboardLayout element={<Contribute />} />} />
        <Route path='dashboard/settings/account' element={<DashboardLayout element={<Accounts />} />} />
        <Route path='dashboard/settings/change-password' element={<DashboardLayout element={<ChangePassword />} />} />
        <Route path='dashboard/rewards' element={<DashboardLayout element={<Rewards />} />} />

        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
    </>
  );
}
