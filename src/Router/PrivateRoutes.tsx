import { Navigate, Outlet } from 'react-router-dom';
import { routerPath } from '@/Router/constantsRouter';
import { useAuth } from '@/context';
import { memo } from 'react';

export const PrivateRoutes = memo(() => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated, 'render private routes');

  return isAuthenticated ? <Outlet /> : <Navigate to={routerPath.login} />;
});
