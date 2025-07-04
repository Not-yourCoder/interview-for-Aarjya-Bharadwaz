import DashboardComponent from '@/components/Launches/Dashboard'
import LaunchHeader from '@/components/Launches/Header'
import SpaceXLogo from '@/components/Logo'
import { images } from '@/constants/images'


const Dashboard = () => {
    return (
        <div>
            <SpaceXLogo imageUrl={images.logo} className='flex align-middle justify-center w-full mx-auto py-4 border-b-2 border-[#E4E4E7]' />
            <div className='max-w-6xl mx-auto overflow-hidden'>
                <LaunchHeader />
                <DashboardComponent />
            </div>
        </div>
    )
}

export default Dashboard