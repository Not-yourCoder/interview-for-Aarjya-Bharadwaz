import type { LaunchFilters } from "@/types/launches";

export const launchFilter: LaunchFilters[] = [
  {
    id: "all",
    label: "All Launches",
  },
  {
    id: "success",
    label: "Successful Launches",
  },
  {
    id: "upcoming",
    label: "Upcoming Launches",
  },
  {
    id: "failed",
    label: "Failed Launches",
  },
];

export const dateRanges = [
  "All",
  "Past week",
  "Past month",
  "Past 3 months",
  "Past 6 months",
  "Past year",
  "Past 2 years",
] as const;
