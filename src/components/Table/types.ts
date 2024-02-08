import type { MRT_PaginationState, MRT_SortingState } from 'mantine-react-table';

export type ColumnsData = {
  short: string;
  target: string;
  counter: string;
};

export type Params = {
  sorting: MRT_SortingState;
  pagination: MRT_PaginationState;
};
