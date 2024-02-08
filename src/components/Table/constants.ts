import { MRT_ColumnDef } from 'mantine-react-table';
import { ColumnsData } from './types';

export const dataColumns: MRT_ColumnDef<ColumnsData>[] = [
  {
    accessorKey: 'short',
    header: 'Short Link',
  },
  {
    accessorKey: 'target',
    header: 'Target Link',
    enableClickToCopy: false,
  },
  {
    accessorKey: 'counter',
    header: 'Counter',
    enableClickToCopy: false,
  },
];
