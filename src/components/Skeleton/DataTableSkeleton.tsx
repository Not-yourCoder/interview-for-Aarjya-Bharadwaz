import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export default function TableSkeleton() {
    const rows = Array.from({ length: 11 })

    return (
        <div className="rounded-md border border-gray-200 shadow-sm overflow-hidden">
            <Table className="w-full">
                <TableBody>
                    {rows.map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            <TableCell className="p-3">
                                <Skeleton className="h-4 w-6 bg-gray-400" />
                            </TableCell>
                            <TableCell className="p-3">
                                <Skeleton className="h-4 w-28 bg-gray-400" />
                            </TableCell>
                            <TableCell className="p-3">
                                <Skeleton className="h-4 w-24 bg-gray-400" />
                            </TableCell>
                            <TableCell className="p-3">
                                <Skeleton className="h-4 w-32 bg-gray-400" />
                            </TableCell>
                            <TableCell className="p-3">
                                <Skeleton className="h-4 w-16 bg-gray-400" />
                            </TableCell>
                            <TableCell className="p-3">
                                <Skeleton className="h-6 w-16 rounded-full bg-gray-400" />
                            </TableCell>
                            <TableCell className="p-3">
                                <Skeleton className="h-4 w-20 bg-gray-400" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
