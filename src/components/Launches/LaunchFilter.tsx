
import { launchFilter } from '@/constants/filters'
import { Funnel } from 'lucide-react'
import { CommonSelect } from '../Common/Select'

const LaunchFilter = () => {
    return (
        <CommonSelect icon={<Funnel />} selectItems={launchFilter} />
    )
}

export default LaunchFilter