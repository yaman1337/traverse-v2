import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';

export default function PrivateRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
    </>
  );
}
