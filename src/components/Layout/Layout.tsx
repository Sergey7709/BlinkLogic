import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { AppShell } from '@mantine/core';

export const Layout = () =>
    <div>
        <AppShell
          padding="md"
        >
        <AppShell.Header>
            <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
        </AppShell>
    </div>;
