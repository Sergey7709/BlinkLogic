import { MRT_ColumnDef } from 'mantine-react-table';
import { ColumnsData } from './types';

export const dataColumns: MRT_ColumnDef<ColumnsData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableClickToCopy: false,
    enableSorting: false,
  },
  {
    accessorKey: 'target',
    header: 'Target Link',
    enableClickToCopy: false,
  },
  {
    accessorKey: 'short',
    header: 'Short Code',
  },
  {
    accessorKey: 'readyShort',
    header: 'Short Link',
    enableSorting: false,
  },
  {
    accessorKey: 'counter',
    header: 'Counter',
    enableClickToCopy: false,
  },
];
