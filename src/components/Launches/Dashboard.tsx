import { useLaunches } from '@/hooks/useLaunches'
import { DataTable } from './DataTable'
import { launchColumns } from './columns'
import { useLaunchePads } from '@/hooks/useLaunchPads'
import { useRockets } from '@/hooks/useRockets'
import { usePayload } from '@/hooks/usePayload'


const DashboardComponent = () => {
    const { data } = useLaunches()
    const { data: launchpads } = useLaunchePads()
    const { data: rockets } = useRockets()
    const { data: payloads } = usePayload()
    return (
        <>
            <DataTable data={data} columns={launchColumns({ launchpads, rockets, payloads })} />
        </>
    )
}

export default DashboardComponent