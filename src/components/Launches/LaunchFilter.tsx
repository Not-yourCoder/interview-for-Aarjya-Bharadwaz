import React from 'react'
import { Select } from '../ui/select'
import { launchFilter } from '@/constants/filters'
import { Funnel } from 'lucide-react'
import { CommonSelect } from '../Common/Select'

type Props = {}

const LaunchFilter = (props: Props) => {
    return (
        <CommonSelect icon={<Funnel />} selectItems={launchFilter}/>
    )
}

export default LaunchFilter