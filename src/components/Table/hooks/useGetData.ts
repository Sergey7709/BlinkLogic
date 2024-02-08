import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { baseUrl } from '@/service/constantsApi';
import { instance } from '@/service/api.config';

import { Params } from '../types';

export const useGetData = ({ sorting, pagination }: Params) => {
  const fetchURL = new URL(`${baseUrl}/api/statistics?`);
  const transformedSorting = sorting.map((item) => {
    const direction = item.desc ? 'desc_' : 'asc_';
    return `${direction}${item.id}`;
  });
  transformedSorting.forEach((item) => {
    fetchURL.searchParams.append('order', item);
  });
  fetchURL.searchParams.set('offset', `${pagination.pageIndex * pagination.pageSize}`);
  fetchURL.searchParams.set('limit', `${pagination.pageSize}`);

  return useQuery({
    queryKey: ['link', fetchURL.href],
    queryFn: () => instance.get(fetchURL.href).then((res) => res),
    placeholderData: keepPreviousData,
    staleTime: 30_000,
    retry: 1,
  });
};
