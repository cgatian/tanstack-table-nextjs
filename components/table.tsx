import { useReactTable, createColumnHelper, ColumnDef } from '@tanstack/react-table'


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
    
    const columnDefs: ColumnDef<Person>[] = [
        columnHelper.accessor('firstName'),
        columnHelper.accessor('lastName'),
    ];
//  const table = useReactTable({
//  });




    return <div>Table!</div>
}