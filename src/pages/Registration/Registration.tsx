import { AuthForm } from '@/components/AuthForm';
import { useMutation } from '@tanstack/react-query';
import { instance } from '@/service/api.config';

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
    <>
      <AuthForm title="Sign Up" handleSubmit={handleRegister} />
    </>
  );
};
