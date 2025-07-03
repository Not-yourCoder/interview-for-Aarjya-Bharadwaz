import { useLaunches } from '@/hooks/useLaunches'
import { DataTable } from './DataTable'
import { launchColumns } from './columns'
import { useLaunchePads } from '@/hooks/useLaunchPads'
import { useRockets } from '@/hooks/useRockets'
import { usePayload } from '@/hooks/usePayload'
import { useDateRangeFilter } from '@/context/DateRangeContext'
import { getDateOnly } from '@/utils/helpers'


const DashboardComponent = () => {
    const { data } = useLaunches()
    const { data: launchpads } = useLaunchePads()
    const { data: rockets } = useRockets()
    const { data: payloads } = usePayload()
    const { state } = useDateRangeFilter();
    console.log(state);

    const filteredLaunches = data?.filter((launch) => {
        const launchDate = new Date(launch.date_utc);

        if (state.dateRange) {
            const launchTime = getDateOnly(launchDate);
            console.log("Active date range:", state.dateRange);
            if (
                (state.dateRange.from && launchTime < getDateOnly(state.dateRange.from)) ||
                (state.dateRange.to && launchTime > getDateOnly(state.dateRange.to))
            ) {
                return false;
            }
        }

        return true;
    });
      
    console.log("filteredLaunches",filteredLaunches);
    return (
        <>
            <DataTable className="max-h-[740px] overflow-auto" data={filteredLaunches} columns={launchColumns({ launchpads, rockets, payloads })} />
        </>
    )
}

export default DashboardComponent