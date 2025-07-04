"use client"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { type Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"

type DataTablePaginationProps<TData> = {
    table: Table<TData>
}

export function PaginationComponent<TData>({ table }: DataTablePaginationProps<TData>) {
    const totalPages = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex

    const getPageNumbers = () => {
        const pages = []

        if (totalPages <= 5) {
            for (let i = 0; i < totalPages; i++) pages.push(i)
        } else {
            pages.push(0)

            if (currentPage > 2) pages.push(currentPage - 1)
            if (currentPage > 1 && currentPage < totalPages - 2) pages.push(currentPage)
            if (currentPage < totalPages - 3) pages.push(currentPage + 1)

            pages.push(totalPages - 1)
        }
        return Array.from(new Set(pages)).filter((page) => page >= 0 && page < totalPages)
    }

    const buttonClass = (active: boolean) =>
        `px-4 py-2  text-sm border-[#E4E4E7] rounded-none ${active ? "bg-gray-100 font-semibold" : "hover:bg-gray-200 hover:cursor-pointer"
        }`

    return (
        <div className="float-end px-2 py-4">
            <Pagination>
                <PaginationContent className="flex border-2 border-[#E4E4E7] rounded-md overflow-hidden divide-x divide-gray-300">

                    <PaginationItem>
                        <button
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="p-2 text-gray-800 text-sm hover:bg-gray-200 hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    </PaginationItem>

                    {getPageNumbers().map((page, index, arr) => (
                        <PaginationItem key={page}>
                            <button
                                onClick={() => table.setPageIndex(page)}
                                className={buttonClass(page === currentPage)}
                            >
                                {page + 1}
                            </button>
                            {arr[index + 1] && arr[index + 1] - page > 1 && (
                                <span className="px-4 py-2 text-gray-800">…</span>
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <button
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="p-2 text-gray-700 text-sm hover:bg-gray-200 hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>
    )
}
