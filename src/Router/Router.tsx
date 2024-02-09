import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { Login } from '@/pages/Login/Login';
import { routerPath } from '@/Router/constantsRouter';
import { Layout } from '@/components/Layout';
import { Registration } from '@/pages/Registration';
import { PrivateRoutes } from '@/Router/PrivateRoutes';
import { DataManager } from '@/pages/Data-manager';

const publicRoutes: RouteObject[] = [
  { path: routerPath.login, element: <Login /> },
  {
    path: routerPath.registration,
    element: <Registration />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: routerPath.linksTable,
    element: <DataManager />,
  },
];

const router = createBrowserRouter([
  {
    path: routerPath.rootElement,
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
