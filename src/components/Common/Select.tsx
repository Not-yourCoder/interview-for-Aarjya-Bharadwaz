import * as React from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useLaunchFilter } from "@/context/LaunchType"
import type { LaunchFilter } from "@/types/filters"


type Props = {
    icon?: React.ReactNode
    selectItems: Record<string, string>[]
}
export function CommonSelect({ icon, selectItems }: Props) {
    const { dispatch } = useLaunchFilter()

    const handleSelectedLaunchType = (type: LaunchFilter) => {
        console.log("type", type)
        dispatch({ type: "SET_FILTER", payload: type })
    }
    return (
        <Select defaultValue={selectItems[0].id} onValueChange={handleSelectedLaunchType}>
            <SelectTrigger className="w-[120px] md:w-[220px] border-2 border-[#E4E4E7] text-xs md:text-[14px]">
                <div className="flex gap-2 items-center">
                    {icon}
                    <SelectValue placeholder="Select a Launch" />
                </div>
            </SelectTrigger>
            <SelectContent>
                {selectItems.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
