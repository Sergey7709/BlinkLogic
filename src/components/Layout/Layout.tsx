import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { AppShell } from '@mantine/core';
import { useEffect } from 'react';
import { useAuth } from '@/context';
import { routerPath } from '@/Router/constantsRouter';

export const Layout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routerPath.login);
    }
  }, []);

  return (
    <div>
      <AppShell padding="md">
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};
