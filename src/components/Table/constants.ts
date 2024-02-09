import { MRT_ColumnDef } from 'mantine-react-table';
import { ColumnsData } from './types';

export const dataColumns: MRT_ColumnDef<ColumnsData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableClickToCopy: false,
    enableSorting: false,
    size: 30,
  },
  {
    accessorKey: 'target',
    header: 'Original Link',
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
    header: 'Link Visits',
    enableClickToCopy: false,
  },
];
