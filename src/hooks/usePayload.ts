import { getPayloads } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const usePayload = () => {
  return useQuery({
    queryKey: ["payloads"],
    queryFn: getPayloads,
    initialData: [],
  });
};
