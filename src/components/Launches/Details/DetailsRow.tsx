interface DetailsRowProps {
    label: string;
    value?: React.ReactNode;
    className?: string;
}

const LaunchDetailsRow = ({ label, value, className }: DetailsRowProps) => {
    return (
        <div className={`flex items-center py-2.5 border-b-2 gap-20  ${className || ""}`}>
            <span className="text-sm w-24 text-gray-600">{label}</span>
            <span className="text-sm font-medium text-gray-900 text-left">
                {value ?? "N/A"}
            </span>
        </div>
    );
};

export default LaunchDetailsRow;
