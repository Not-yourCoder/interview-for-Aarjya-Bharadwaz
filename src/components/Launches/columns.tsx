/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"

export const launchColumns = ({ launchpads, rockets, payloads }: {
    launchpads: any[]
    rockets: any[]
    payloads: any[]
}): ColumnDef<any, any>[] => [
        {
            id: "rowNumber",
            header: "No.",
            cell: ({ row }) => Number(row.id) + 1,
        },
        {
            accessorKey: "date_utc",
            header: "Launched",
            cell: ({ row }) => {
                const date = new Date(row.original.date_utc);
                return new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }).format(date).replace('at', ' ,')
            }
        },
        {
            id: "location",
            header: "Location",
            cell: ({ row }) => {
                const launchpad = launchpads?.find(p => p.id === row.original.launchpad)
                return launchpad?.name || "Unknown"
            },
        },
        {
            accessorKey: "name",
            header: "Mission",
            cell: ({ row }) => row.original.name,
        },
        {
            id: "orbit",
            header: "Orbit",
            cell: ({ row }) => {
                const payload = payloads?.find(p => p.id === row.original.payloads[0])
                return payload?.orbit || "Unknown"
            },
        },
        {
            accessorKey: "success",
            header: "Status",
            cell: ({ row }) => {
                const status = row.original.success
                if (status === null)
                    return <Badge variant="default">N/A</Badge>
                return status ? (
                    <Badge variant="success">Success</Badge>
                ) : (
                    <Badge variant="failed">Failed</Badge>
                )
            },
        },
        {
            id: "rocket",
            header: "Rocket",
            cell: ({ row }) => {
                const rocket = rockets?.find(r => r.id === row.original.rocket)
                return rocket?.name || "Unknown"
            },
        },
    ]
