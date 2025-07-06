import { useLaunches } from '@/hooks/useLaunches'
import { DataTable } from './DataTable'
import { launchColumns } from './columns'
import { useLaunchePads } from '@/hooks/useLaunchPads'
import { useRockets } from '@/hooks/useRockets'
import { usePayload } from '@/hooks/usePayload'
import { useDateRangeFilter } from '@/context/DateRangeContext'
import { getDateOnly } from '@/utils/helpers'
import { useState } from 'react'
import LaunchDetailsDialog from './Details/LaunchDetails'
import { useLaunchFilter } from '@/context/LaunchType'
import type { LaunchResponse } from '@/types/launches'


const DashboardComponent = () => {
    const [selectedLaunch, setSelectedLaunch] = useState<LaunchResponse | null>(null);

    const { data, isLoading, isError } = useLaunches()
    const { data: launchpads } = useLaunchePads()
    const { data: rockets } = useRockets()
    const { data: payloads } = usePayload()
    const { state } = useDateRangeFilter();
    const { state: launchFilterState } = useLaunchFilter()


    const handleRowClick = (launch: LaunchResponse) => {
        setSelectedLaunch(launch);
    };

    const handleCloseDialog = () => {
        setSelectedLaunch(null);
    };

    if (!data) return
    const filteredLaunches = data?.filter((launch) => {
        const launchDate = new Date(launch.date_utc);

        if (state.dateRange) {
            const launchTime = getDateOnly(launchDate);
            if (
                (state.dateRange.from && launchTime < getDateOnly(state.dateRange.from)) ||
                (state.dateRange.to && launchTime > getDateOnly(state.dateRange.to))
            ) {
                return false;
            }
        }
        const selectedType = launchFilterState.selectedFilter;
        if (selectedType !== "all") {
            if (selectedType === "success" && !launch.success) return false;
            if (selectedType === "failed" && launch.success !== false) return false;
            if (selectedType === "upcoming" && !launch.upcoming) return false;
            if (selectedType === "tbd" && !launch.tbd) return false;
        }
        return true;
    });

    if (isError) return <div>Error occured</div>
    if (isLoading) return <div>Loading</div>
    return (
        <>
            <DataTable data={filteredLaunches} columns={launchColumns({ launchpads, rockets, payloads })} onRowClick={handleRowClick} />
            <LaunchDetailsDialog
                open={!!selectedLaunch}
                launch={selectedLaunch}
                onClose={handleCloseDialog}
            />

        </>
    )
}

export default DashboardComponent