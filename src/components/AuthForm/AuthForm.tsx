import { useForm } from '@mantine/form';
import { Box, Button, Card, Center, PasswordInput, Space, TextInput, Title } from '@mantine/core';

type AuthFormProps = {
  title: string;
  handleSubmit: (loginData: { username: string; password: string }) => void;
};
export const AuthForm = ({ title, handleSubmit }: AuthFormProps) => {
  const form = useForm({
    initialValues: { username: '', password: '' },

    validate: {
      username: (value: string) => {
        if (value.length < 3) {
          return 'Name must have at least 3 letters';
        }
        if (value.length > 10) {
          return 'Name must not exceed 10 characters';
        }
        return null;
      },
      password: (value: string) => {
        if (value.length < 6) {
          return 'Password must have at least 6 characters';
        }
        if (value.length > 30) {
          return 'Password must not exceed 30 characters';
        }
        return null;
      },
    },
  });

  return (
    <>
      <Space h={300} />
      <Box maw={340} mx="auto">
        <Card withBorder radius="md" shadow="xl">
          <Center>
            <Title order={3}>{title}</Title>
          </Center>
          <Space h={20} />
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <TextInput label="Name" placeholder="Name" {...form.getInputProps('username')} />
            <PasswordInput
              mt="sm"
              label="Password"
              placeholder="Password"
              {...form.getInputProps('password')}
            />
            <Space h={20} />
            <Button
              type="submit"
              mt="sm"
              variant="gradient"
              gradient={{ from: 'teal', to: 'violet', deg: 142 }}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Card>
      </Box>
    </>
  );
};
