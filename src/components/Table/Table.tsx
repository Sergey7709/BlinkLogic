import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';
import { useState } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_PaginationState,
  type MRT_SortingState,
} from 'mantine-react-table';
import { dataColumns } from './constants';
import { useGetData } from './hooks/useGetData';

export const Table = () => {
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const { data, isError, isFetching, isLoading } = useGetData({
    pagination,
    sorting,
  });

  const fetchedLink = data?.data ?? [];
  const totalCount = Number(data?.headers['x-total-count']);

  const table = useMantineReactTable({
    columns: dataColumns,
    data: fetchedLink,
    enableGlobalFilter: false,
    enableFilters: false,
    enableColumnActions: true,
    enablePagination: true,
    manualPagination: true,
    manualSorting: true,
    enableTopToolbar: true,
    enableDensityToggle: false,
    enableBottomToolbar: true,
    enableClickToCopy: true,
    rowCount: totalCount, //!!!  значение берется из headers, т.к. Response body  бэк не предоставляет общее кол-во item
    mantineToolbarAlertBannerProps: isError
      ? {
          color: 'red',
          children: 'Error loading data',
        }
      : undefined,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      sorting,
    },
  });
  return <MantineReactTable table={table} />;
};
