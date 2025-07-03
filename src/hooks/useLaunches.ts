import { getLaunches } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useLaunches = () => {
  return useQuery({
    queryKey: ["launches"],
    queryFn: getLaunches,
    initialData: [],
  });
};
