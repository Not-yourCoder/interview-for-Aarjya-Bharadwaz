import { Calendar } from 'lucide-react'
import LaunchFilter from './LaunchFilter'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import DateRangePicker from './DateRange'
import { useState } from 'react'
import { dateRanges } from '@/constants/filters'


const LaunchHeader = () => {
    const [selectedRange, setSelectedRange] = useState<string>(dateRanges[0]);

    return (
        <div className='flex items-center justify-between my-4'>
            <Dialog>
                <DialogTrigger asChild className='sm:w-[100px] md:w-[180px] flex justify-start'>
                    <Button>
                        <Calendar />
                        <span>{selectedRange}</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                    <DateRangePicker selectedRange={selectedRange} setSelectedRange={setSelectedRange}  />
                </DialogContent>
            </Dialog>
            <LaunchFilter />
        </div>
    )
}

export default LaunchHeader