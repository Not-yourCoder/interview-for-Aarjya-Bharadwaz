import { type ReactNode } from 'react'
import { Button } from '../ui/button'

type Props = {
    icon: ReactNode
    text: string
    type: "primary" | "dropdown" | "secondary"
}

const CommonButton = ({ icon, text }: Props) => {
    return (
        <Button >
            <div className='flex items-center gap-2 p-4 '>
                {icon}
                <span>
                    {text}
                </span>
            </div>
        </Button>
    )
}

export default CommonButton