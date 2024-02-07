import { Navigate, Outlet } from 'react-router-dom';
import { routerPath } from '@/Router/constantsRouter';
import { useAuth } from '@/context';

export const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={routerPath.login} />;
};
