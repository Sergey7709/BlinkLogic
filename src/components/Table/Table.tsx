import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';
import { useMemo, useState } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_PaginationState,
  type MRT_SortingState,
  MRT_RowSelectionState,
} from 'mantine-react-table';
import { useGetData } from '@/service/hooks/useGetData';
import { handleExtendData } from '@/service/function/handleExtendData';
import { handleAxiosError } from '@/service/function/handleAxiosError';
import { dataColumns } from './constants';

export const Table = () => {
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const { data, isError, isFetching, isLoading, error } = useGetData({
    pagination,
    sorting,
  });
  const errorData = handleAxiosError(error);

  const extendedData = useMemo(() => handleExtendData(data), [data]);

  const totalCount = Number(data?.headers['x-total-count']) || 0;

  const table = useMantineReactTable({
    columns: dataColumns,
    data: extendedData,
    enableColumnResizing: true,
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
    rowCount: totalCount,
    enableRowSelection: true,
    mantineToolbarAlertBannerProps: isError
      ? {
          color: 'red',
          children: `Error loading data,  ${errorData?.detail}`,
        }
      : undefined,
    getRowId: (row) => row.id,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      showSkeletons: isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      sorting,
      rowSelection,
    },
  });
  return <MantineReactTable table={table} />;
};
