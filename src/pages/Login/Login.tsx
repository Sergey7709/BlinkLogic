import { AuthForm } from '@/components/AuthForm';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/context';
import { routerPath } from '@/Router/constantsRouter';
import { Button, Flex, Space, Text } from '@mantine/core';
import { UseCreateLogin } from '@/service/hooks/useCreateLogin';
import { handleAxiosError } from '@/service/function/handleAxiosError';

export const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const { mutate, error, isPending } = UseCreateLogin({ setIsAuthenticated });

  const handleSubmitLogin = (loginData: { username: string; password: string }) => {
    mutate(loginData);
  };

  const errorData = handleAxiosError(error);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={routerPath.linksTable} replace />
      ) : (
        <Flex w="100%" justify="center" align="center" direction="column">
          <AuthForm title="Sign In" handleSubmit={handleSubmitLogin} isPending={isPending} />
          {error && (
            <Text c="red" size="lg">
              {errorData?.detail}
            </Text>
          )}
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
