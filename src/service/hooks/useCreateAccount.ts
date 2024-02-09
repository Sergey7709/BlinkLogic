import { useMutation } from '@tanstack/react-query';
import { instance } from '@/service/api.config';

export const useCreateAccount = () =>
  useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      await instance.post(
        `/api/register?username=${loginData.username}&password=${loginData.password}`,
        {}
      );
    },
  });
