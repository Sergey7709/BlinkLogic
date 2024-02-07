import { Navigate, Outlet } from 'react-router-dom';
import { routerPath } from '@/Router/constantsRouter';

export const PrivateRoutes = () => {
  const isAuthenticated = false; //!!!

  return isAuthenticated ? <Outlet /> : <Navigate to={routerPath.login} />;
};
