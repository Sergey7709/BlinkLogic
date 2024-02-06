import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { DataApiResponse, Params } from '../types';
import { baseUrl } from '../constants';

export const useGetData = ({ sorting, pagination }: Params) => {
  const fetchURL = new URL(baseUrl);

  fetchURL.searchParams.set('offset', `${pagination.pageIndex * pagination.pageSize}`);
  fetchURL.searchParams.set('limit', `${pagination.pageSize}`);
  fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? [])); //!!!

  return useQuery<DataApiResponse>({
    queryKey: ['link', fetchURL.href], //!!!
    queryFn: () => fetch(fetchURL.href).then((res) => res.json()), //!!!
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });
};
