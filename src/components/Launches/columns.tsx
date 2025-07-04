/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import type { LaunchFilter } from "@/types/filters"
import type { LaunchResponse } from "@/types/launches"

export const launchColumns = ({ launchpads, rockets, payloads }: {
    launchpads: any[]
    rockets: any[]
    payloads: any[]
}): ColumnDef<LaunchResponse, any>[] => [
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
                const { success, upcoming, tbd } = row.original;
                let variant: LaunchFilter = "failed";
                let label = "Failed";

                if (success) {
                    variant = "success";
                    label = "Success";
                } else if (upcoming) {
                    variant = "upcoming";
                    label = "Upcoming";
                } else if (tbd) {
                    variant = "upcoming";
                    label = "TBD";
                }

                return <Badge variant={variant}>{label}</Badge>;
              }
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
