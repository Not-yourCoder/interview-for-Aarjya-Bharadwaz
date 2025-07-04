import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PaginationComponent } from "../Pagination/pagination"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    className?: string
    onRowClick: (details: TData) => void
    isLoading: boolean
    isError: boolean
    error: Error | null
}

export function DataTable<TData, TValue>({
    columns,
    data,
    className,
    onRowClick,
    isLoading, isError, error
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 12,
            },
        },
    })
    return (
        <div className={` ${className}`}>
            <div className="rounded-md border-2 border-[#E4E4E7] shadow-sm max-h-4xl">
                <Table className="w-full">
                    <TableHeader className="bg-[#E4E4E7] ">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} >
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="p-3.5 text-center text-[#4B5563]">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length && !isLoading ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="p-4 hover:bg-[#E4E4E7] hover:cursor-pointer"
                                    onClick={() => onRowClick(row.original)}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="p-3.5 max-w-44 overflow-hidden text-center">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : !isError ?
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results found.
                                </TableCell>
                            </TableRow> :
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    {String(error)}
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </div>
            <PaginationComponent table={table} />
        </div>
    )
}