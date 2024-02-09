import { MRT_ColumnDef } from 'mantine-react-table';
import { ColumnsData } from './types';

export const dataColumns: MRT_ColumnDef<ColumnsData>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableClickToCopy: false,
    enableSorting: false,
    minSize: 70,
    maxSize: 100,
    size: 80,
  },
  {
    accessorKey: 'target',
    header: 'Original Link',
    enableClickToCopy: false,
    minSize: 100,
    maxSize: 500,
    size: 300,
  },
  {
    accessorKey: 'short',
    header: 'Short Code',
    minSize: 100,
    maxSize: 200,
    size: 150,
  },
  {
    accessorKey: 'readyShort',
    header: 'Short Link',
    enableSorting: false,
    minSize: 100,
    maxSize: 250,
    size: 200,
  },
  {
    accessorKey: 'counter',
    header: 'Link Visits',
    enableClickToCopy: false,
    minSize: 100,
    maxSize: 160,
    size: 130,
  },
];
