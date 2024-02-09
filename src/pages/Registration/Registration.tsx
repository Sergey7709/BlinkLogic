import { AuthForm } from '@/components/AuthForm';
import { Button, Flex, Space, Text } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { routerPath } from '@/Router/constantsRouter';
import { useCreateAccount } from '@/service/hooks/useCreateAccount';
import { handleAxiosError } from '@/service/function/handleAxiosError';

export const Registration = () => {
  const { mutateAsync, error, isPending } = useCreateAccount();
  const navigate = useNavigate();

  const errorData = handleAxiosError(error);

  const handleRegister = async (loginData: { username: string; password: string }) => {
    await mutateAsync(loginData).then(() => navigate(routerPath.login));
  };

  return (
    <Flex w="100%" justify="center" align="center" direction="column">
      <AuthForm title="Sign Up" handleSubmit={handleRegister} isPending={isPending} />
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
            to={routerPath.login}
            variant="gradient"
            fw={700}
            gradient={{ from: 'indigo', to: 'red', deg: 166 }}
          >
            Go back
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
