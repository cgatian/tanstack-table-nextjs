import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useState } from 'react'
import { tTable } from '../styles/Home.module.css';

interface Person {
  firstName: string
  lastName: string
}

const mockData: Person[] = [
    { firstName: 'Chaz', lastName: 'Gatian'},
    { firstName: 'Robby', lastName: 'Smith'},
    { firstName: 'Scott', lastName: 'York'},
    
]

export const Table: React.VFC = () => {
    const columnHelper = createColumnHelper<Person>();
    
    const columnDefs = [
        columnHelper.accessor('firstName', {}),

        columnHelper.accessor('lastName', {
            size: 600,
            
        })
    ];

    const [data, setData] = useState(() => [...mockData]);

    const table = useReactTable({
        data, 
        columns: columnDefs,
        getCoreRowModel: getCoreRowModel(),
    });

    return <table className={tTable}>
        <thead></thead>
        <tbody>
            {table.getRowModel().rows.map(row => (
                 <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>

}