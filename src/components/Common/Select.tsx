import * as React from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type Props = {
    icon?: React.ReactNode
    selectItems: Record<string, string>[]
}
export function CommonSelect({ icon, selectItems }: Props) {
    return (
        <Select>
            <SelectTrigger className="w-[220px]">
                <div className="flex gap-2 items-center">
                    {icon}
                    <SelectValue placeholder="Select a Launch" />
                </div>
            </SelectTrigger>
            <SelectContent>
                {selectItems.map((item) => (
                    <SelectItem value={item.id}>{item.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
