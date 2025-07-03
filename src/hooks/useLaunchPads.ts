import { getLaunchpads } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useLaunchePads = () => {
  return useQuery({
    queryKey: ["launchpads"],
    queryFn: getLaunchpads,
    initialData: [],
  });
};
