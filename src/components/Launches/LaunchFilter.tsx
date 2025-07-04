
import { launchFilter } from '@/constants/filters'
import { Funnel } from 'lucide-react'
import { CommonSelect } from '../Common/Select'
import { useLaunchFilter } from '@/context/LaunchType'


const LaunchFilter = () => {
    const { state } = useLaunchFilter()
    console.log("launch type", state)
    return (
        <CommonSelect icon={<Funnel />} selectItems={launchFilter} />
    )
}

export default LaunchFilter