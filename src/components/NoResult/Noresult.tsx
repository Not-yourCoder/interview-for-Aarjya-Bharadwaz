import { images } from '@/constants/images'


const Noresult = () => {
    return (
        <div>
            <div className='w-6/12 flex mx-auto'>
                <img src={images.noresult} />
            </div>
            <div className='mb-8'>
                <h1 className='text-xl font-semibold'>No Results</h1>
                <p className='text-md font-normal text-slate-500'>Sorry there are no results for this filter.</p>
            </div>
        </div>
    )
}

export default Noresult