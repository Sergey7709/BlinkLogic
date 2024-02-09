import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '@/service/api.config';

export const useCreateShortLink = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (link: string) => {
      await instance.post(`/api/squeeze?link=${link}`);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['link'] }),
  });
};
