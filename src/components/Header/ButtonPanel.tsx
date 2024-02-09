import { Button, Group } from '@mantine/core';
import { useAuth } from '@/context';
import { useMediaQuery } from '@mantine/hooks';

export const ButtonPanel = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const matches = useMediaQuery('(max-width: 30rem)');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Group w={matches ? '100%' : '6rem'}>
      {isAuthenticated && (
        <Button color="rgba(242, 99, 99, 1)" size="xs" onClick={handleLogout} fullWidth>
          Logout
        </Button>
      )}
    </Group>
  );
};
