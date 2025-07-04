import { Skeleton } from "@/components/ui/skeleton"

const LaunchDetailsSkeleton = () => {
    return (
        <>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <Skeleton className="w-20 h-20 rounded-lg bg-gray-300" />
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-32 bg-gray-300" />
                        <Skeleton className="h-4 w-24 bg-gray-300" />
                        <div className="flex items-center gap-2">
                            {[1, 2, 3].map((i) => (
                                <Skeleton key={i} className="h-5 w-5 rounded-full bg-gray-300" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Icons */}

            {/* Description */}
            <div className="px-4 py-3 border-b space-y-2">
                <Skeleton className="h-4 w-full bg-gray-300" />
                <Skeleton className="h-4 w-full bg-gray-300" />
                <Skeleton className="h-4 w-full bg-gray-300" />
                <Skeleton className="h-4 w-1/2 bg-gray-300" />
            </div>

            {/* Details */}
            <div className="px-4 py-3 space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                        <Skeleton className="h-4 w-24 bg-gray-300" />
                        <Skeleton className="h-4 w-32 bg-gray-300" />
                    </div>
                ))}
            </div>
        </>

    )
}

export default LaunchDetailsSkeleton
