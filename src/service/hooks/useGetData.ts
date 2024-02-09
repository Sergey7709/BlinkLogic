import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { baseUrl } from '@/service/constants.api';
import { instance } from '@/service/api.config';

import { ColumnsData, Params } from '@/components/Table/types';

type Data = Omit<ColumnsData, 'readyShort'>;
export type Statistics = {
  data: Data[];
  headers: {
    [key: string]: any;
  };
};
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

  return useQuery<Statistics, Error>({
    queryKey: ['link', fetchURL.href],

    queryFn: () =>
      instance.get(fetchURL.href).then((resp) => {
        if ('data' in resp && 'headers' in resp) {
          const { data, headers } = resp;
          return { data: data as Data[], headers };
        }
        throw new Error('Invalid response format');
      }),
    placeholderData: keepPreviousData,
    staleTime: 30_000,
    retry: 1,
  });
};
