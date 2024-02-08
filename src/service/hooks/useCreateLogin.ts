import { useMutation } from '@tanstack/react-query';
import { instance } from '@/service/api.config';
import { AuthContextType } from '@/context/type.auth.context';

type LoginRequest = {
  data: {
    access_token: string;
    token_type: string;
  };
};

type CreateLogin = Pick<AuthContextType, 'setIsAuthenticated'>;
export const UseCreateLogin = ({ setIsAuthenticated }: CreateLogin) =>
  useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      const resp: LoginRequest = await instance.post('/api/login', loginData);
      localStorage.setItem('token', resp.data.access_token);
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    },
    retry: 0,
  });
