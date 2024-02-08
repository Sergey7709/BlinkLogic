import { AuthForm } from '@/components/AuthForm';
import { useMutation } from '@tanstack/react-query';
import { instance } from '@/service/api.config';
import { Button, Flex, Space, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { routerPath } from '@/Router/constantsRouter';

export const Registration = () => {
  const { mutateAsync } = useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      try {
        await instance.post(
          `/api/register?username=${loginData.username}&password=${loginData.password}`,
          {}
        );
      } catch {
        console.log('error');
      }
    },
  });

  const handleRegister = (loginData: { username: string; password: string }) => {
    mutateAsync(loginData);
  };
  return (
    <Flex w="100%" justify="center" align="center" direction="column">
      <AuthForm title="Sign Up" handleSubmit={handleRegister} />
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
