import { AuthForm } from '@/components/AuthForm';
import { useMutation } from '@tanstack/react-query';
import { instance } from '@/service/api.config';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/context';
import { routerPath } from '@/Router/constantsRouter';
import { Button, Flex, Space, Text } from '@mantine/core';

type LoginRequest = {
  data: {
    access_token: string;
    token_type: string;
  };
};

export const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const { mutateAsync } = useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      try {
        const resp: LoginRequest = await instance.post('/api/login', loginData);
        localStorage.setItem('token', resp.data.access_token);
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
      } catch {
        console.log('error'); //!!!
      }
    },
  });

  const useLogin = (loginData: { username: string; password: string }) => {
    mutateAsync(loginData);
  };
  return (
    <>
      {isAuthenticated ? (
        <Navigate to={routerPath.linksTable} replace />
      ) : (
        <Flex w="100%" justify="center" align="center" direction="column">
          <AuthForm title="Sign In" handleSubmit={useLogin} />
          <Space h="lg" />
          <Flex w={300} justify="center">
            <Button variant="subtle">
              <Text
                component={Link}
                to={routerPath.registration}
                variant="gradient"
                gradient={{ from: 'lime', to: 'blue', deg: 164 }}
                fw={700}
              >
                Need an account? Sign up.
              </Text>
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
};
