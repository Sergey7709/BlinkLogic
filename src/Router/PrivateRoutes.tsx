import { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { routerPath } from '@/Router/constantsRouter';

export const PrivateRoutes = memo(() => {
    // const { isSuccess: isAuthenticated, isLoading } = useGetAuthUserMeDataQuery();
    const isAuthenticated = true;

    // if (!isAuthenticated) {
    //     return <div>Load</div>;
    // }

    return isAuthenticated ? <Outlet /> : <Navigate to={routerPath.login} />;
});
