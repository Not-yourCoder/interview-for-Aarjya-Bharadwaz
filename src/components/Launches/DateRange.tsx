/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDateRangeFilter } from "@/context/DateRangeContext";
import { calculateDateRange } from "@/utils/helpers";
import { dateRanges } from "@/constants/filters";


type Props = {
    selectedRange: string
    setSelectedRange: Dispatch<SetStateAction<string>>
}
const DateRangePicker = ({ selectedRange, setSelectedRange }: Props) => {
    const { dispatch } = useDateRangeFilter();
    const [from, setFrom] = useState<Date | undefined>();
    const [to, setTo] = useState<Date | undefined>();
    const [error, setError] = useState("");

    const handleRangeSelect = (range: string) => {
        setSelectedRange(range);
        if (range !== "Custom") {
            const calculatedRange = calculateDateRange(range);
            dispatch({ type: "SET_DATE_RANGE", payload: calculatedRange });
            setFrom(undefined);
            setTo(undefined);
        }
    };

    const handleFromSelect = (date: Date | undefined) => {
        setFrom(date);
        if (date && to) {
            if (date > to) {
                setError("Start date cannot be after end date.");
                return;
            }
            setError("");
            dispatch({ type: "SET_DATE_RANGE", payload: { from: date, to } });
        }
    };

    const handleToSelect = (date: Date | undefined) => {
        setTo(date);
        if (from && date) {
            if (from > date) {
                setError("Start date cannot be after end date.");
                return;
            }
            setError("");
            dispatch({ type: "SET_DATE_RANGE", payload: { from, to: date } });
        }
    };

    // set default 'All' range
    useEffect(() => {
        const initialRange = calculateDateRange(dateRanges[0]);
        dispatch({ type: "SET_DATE_RANGE", payload: initialRange });
    }, []);

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 max-w-3xl">
            <div className="flex gap-4">
                <div className="w-32 flex-shrink-0">
                    <div className="space-y-1">
                        {dateRanges.map((range) => (
                            <button
                                key={range}
                                onClick={() => handleRangeSelect(range)}
                                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150 ${selectedRange === range
                                    ? "bg-primary text-primary-foreground font-medium"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 border-l border-gray-200 pl-4 space-y-4 flex gap-2">
                    <Calendar
                        mode="single"
                        selected={from}
                        onSelect={handleFromSelect}
                        captionLayout="dropdown"
                        fromYear={2006}
                        toYear={2025}
                        className="rounded-md"

                    />


                    <Calendar
                        mode="single"
                        selected={to}
                        onSelect={handleToSelect}
                        captionLayout="dropdown"
                        fromYear={2006}
                        toYear={2025}
                        className="rounded-md"
                    />
                </div>

                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default DateRangePicker;
