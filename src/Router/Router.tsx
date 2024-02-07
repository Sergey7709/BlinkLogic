import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { Login } from '@/pages/Login/Login';
import { routerPath } from '@/Router/constantsRouter';
import { Layout } from '@/components/Layout';
import { Registration } from '@/pages/Registration';
import { PrivateRoutes } from '@/Router/PrivateRoutes';
import { LinksTable } from '@/pages/Links-table';

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
    element: <LinksTable />,
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
console.log('route ');
export function Router() {
  return <RouterProvider router={router} />;
}
