import { images } from "@/constants/images";
import type { DateRange } from "@/types/filters";
import type { LaunchResponse } from "@/types/launches";

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

export const getStatusLabel = (variant: string) => {
  switch (variant) {
    case "success":
      return "Success";
    case "upcoming":
      return "Upcoming";
    case "failed":
      return "Failed";
    default:
      return "Unknown";
  }
};

export const formatDateTime = (dateString: string | undefined) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";

  return date
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", " at");
};

export const getLaunchStatusVariant = (launch: LaunchResponse) => {
  if (launch.success) return "success";
  if (launch.upcoming) return "upcoming";
  if (launch.tbd) return "upcoming";
  return "failed";
};

export const getStatusVariant = (launch: LaunchResponse) => {
  if (launch.success) return "success";
  if (launch.upcoming || launch.tbd) return "upcoming";
  return "failed";
};

export const getIconForLinkType = (type: string) => {
  switch (type.toLowerCase()) {
    case "reddit":
      return images.reddit;
    case "webcast":
      return images.youtube;
    case "wikipedia":
      return images.wikipedia;
    case "flickr":
      return images.flickr;
    case "article":
      return images.article;
    case "pdf":
      return images.pdf;
    case "patch":
      return null;
    default:
      return null;
  }
};
