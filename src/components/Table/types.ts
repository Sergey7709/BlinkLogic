import type {
  MRT_ColumnFilterFnsState,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
} from 'mantine-react-table';

export type ColumnsData = {
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  phoneNumber: string;
};

export type DataApiResponse = {
  data: Array<ColumnsData>;
  meta: {
    totalRowCount: number;
  };
};

export type Params = {
  sorting: MRT_SortingState;
  pagination: MRT_PaginationState;
};
