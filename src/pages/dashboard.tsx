import ErrorPage from '@/components/Error/error'
import DashboardComponent from '@/components/Launches/Dashboard'
import LaunchHeader from '@/components/Launches/Header'
import SpaceXLogo from '@/components/Logo'
import TableSkeleton from '@/components/Skeleton/DataTableSkeleton'
import { images } from '@/constants/images'
import { useLaunches } from '@/hooks/useLaunches'


const Dashboard = () => {
    const { data, isLoading, isError } = useLaunches()
    // if (isLoading) return <TableSkeleton />
    console.log(data)
    return (
        <div>
            <SpaceXLogo imageUrl={images.logo} className='flex align-middle justify-center w-full mx-auto py-4 border-b-2 border-[#E4E4E7]' />
            <div className='max-w-6xl mx-auto overflow-hidden'>
                <LaunchHeader />
                {isLoading ? <TableSkeleton /> : isError ? <ErrorPage /> :
                    <DashboardComponent />
                }
            </div>
        </div>
    )
}

export default Dashboard