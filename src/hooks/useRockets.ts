import { getRockets } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useRockets = () => {
  return useQuery({
    queryKey: ["rockets"],
    queryFn: getRockets,
    initialData: [],
  });
};
