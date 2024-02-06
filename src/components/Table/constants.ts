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
    },
    {
        accessorKey: 'counter',
        header: 'Counter',
    },
  ];

export const baseUrl = 'https://front-test.hex.team';
