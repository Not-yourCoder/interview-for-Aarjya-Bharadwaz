import { Skeleton } from "@/components/ui/skeleton"
import clsx from "clsx"

type SkeletonVariant = "text" | "title" | "image" | "circle" | "badge" | "button"

interface SkeletonLoaderProps {
    variant?: SkeletonVariant
    width?: number | string
    height?: number | string
    className?: string
}

export function SkeletonLoader({
    variant = "text",
    width,
    height,
    className,
}: SkeletonLoaderProps) {
    const baseClasses = "bg-gray-300 animate-pulse"
    const sizeClasses = clsx(
        {
            "h-4 w-[160px]": variant === "text",
            "h-6 w-[200px]": variant === "title",
            "h-10 w-10 rounded-full": variant === "circle",
            "h-6 w-20 rounded-full": variant === "badge",
            "h-8 w-[100px] rounded-md": variant === "button",
            "h-24 w-24 rounded-lg": variant === "image",
        },
        className
    )

    return (
        <Skeleton
            className={clsx(
                baseClasses,
                sizeClasses,
                width && `w-[${width}]`,
                height && `h-[${height}]`
            )}
        />
    )
}
