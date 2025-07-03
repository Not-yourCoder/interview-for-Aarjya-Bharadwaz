import DashboardComponent from '@/components/Launches/Dashboard'
import LaunchHeader from '@/components/Launches/Header'
import SpaceXLogo from '@/components/Logo'
import { images } from '@/constants/images'


const Dashboard = () => {
    return (
        <div className='max-w-6xl mx-auto overflow-hidden'>
            <SpaceXLogo imageUrl={images.logo} className='flex align-middle justify-center w-full mx-auto my-10' />
            <LaunchHeader />
            <DashboardComponent />
        </div>
    )
}

export default Dashboard