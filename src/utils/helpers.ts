import type { DateRange } from "@/types/filters";

export const calculateDateRange = (rangeType?: string): DateRange => {
  const today = new Date();
  const endDate = new Date(today);
  const startDate = new Date(today);

  switch (rangeType) {
    case "All":
      return undefined;
    case "Past week":
      startDate.setDate(today.getDate() - 7);
      break;
    case "Past month":
      startDate.setMonth(today.getMonth() - 1);
      break;
    case "Past 3 months":
      startDate.setMonth(today.getMonth() - 3);
      break;
    case "Past 6 months":
      startDate.setMonth(today.getMonth() - 6);
      break;
    case "Past year":
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    case "Past 2 years":
      startDate.setFullYear(today.getFullYear() - 2);
      break;
    default:
      return undefined;
  }

  return { from: startDate, to: endDate };
};

export const getDateOnly = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
