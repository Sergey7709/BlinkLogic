import { AuthForm } from '@/components/AuthForm';
import { useMutation } from '@tanstack/react-query';
import { instance } from '@/service/api.config';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context';
import { routerPath } from '@/Router/constantsRouter';

type LoginRequest = {
  data: {
    access_token: string;
    token_type: string;
  };
};

export const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  console.log('login render');

  const { mutateAsync } = useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      try {
        const resp: LoginRequest = await instance.post('/api/login', loginData);
        localStorage.setItem('token', resp.data.access_token);
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
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
      {isAuthenticated ? (
        <Navigate to={routerPath.linksTable} replace />
      ) : (
        <AuthForm title="Sign In" handleSubmit={useLogin} />
      )}
    </>
  );
};
