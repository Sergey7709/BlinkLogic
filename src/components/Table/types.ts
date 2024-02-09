import type { MRT_PaginationState, MRT_SortingState } from 'mantine-react-table';

export type ColumnsData = {
  id: string;
  short: string;
  target: string;
  counter: string;
  readyShort: string;
};

export type Params = {
  sorting: MRT_SortingState;
  pagination: MRT_PaginationState;
};
