import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { baseUrl } from '@/service/constantsApi';
import { instance } from '@/service/api.config';
import { DataApiResponse, Params } from '../types';

export const useGetData = ({ sorting, pagination }: Params) => {
  const fetchURL = new URL(baseUrl);
  fetchURL.searchParams.set('offset', `${pagination.pageIndex * pagination.pageSize}`);
  fetchURL.searchParams.set('limit', `${pagination.pageSize}`);
  fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? [])); //!!!

  return useQuery<DataApiResponse>({
    queryKey: [['link'], fetchURL.href], //!!!
    queryFn: () => instance.get(fetchURL.href).then((res) => res.data), //!!!
    placeholderData: keepPreviousData,
    // staleTime: 30_000,
    retry: 1,
  });
};
