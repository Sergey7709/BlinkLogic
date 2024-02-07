import { AuthForm } from '@/components/AuthForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '@/service/api.config';
import { useNavigate } from 'react-router-dom';

type LoginRequest = {
  data: {
    access_token: string;
    token_type: string;
  };
};

export const Login = () => {
  console.log('login render');
  // const navigate = useNavigate(); ///!!!

  const { mutateAsync } = useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      try {
        const resp: LoginRequest = await instance.post('/api/login', loginData);
        localStorage.setItem('token', resp.data.access_token);
        console.log(resp.data.token_type);
        // navigate('/'); ///!!!
      } catch {
        console.log('error');
      }
    },
  });

  const useLogin = (loginData: { username: string; password: string }) => {
    mutateAsync(loginData);
  };
  return (
    <>
      <AuthForm title="Sign In" handleSubmit={useLogin} />
    </>
  );
};
