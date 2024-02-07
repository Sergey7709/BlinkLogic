import { Button, Group } from '@mantine/core';
import { useAuth } from '@/context';

export const ButtonPanel = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Group>
      {isAuthenticated && (
        <Button w={100} color="rgba(242, 99, 99, 1)" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Group>
  );
};
