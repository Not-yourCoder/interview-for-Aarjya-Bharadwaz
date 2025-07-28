export type DateRange =
  | {
      from: Date | undefined;
      to: Date | undefined;
    }
  | undefined;

export type LaunchFilter = "all" | "success" | "upcoming" | "tbd" | "failed";
