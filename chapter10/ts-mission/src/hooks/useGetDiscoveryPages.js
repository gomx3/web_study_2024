import { useQuery } from "@tanstack/react-query";
import { useGetDiscoveries } from "./queries/useGetDiscoveries";

function useGetDiscoveryPages(page) {
  return useQuery({
    queryFn: () => useGetDiscoveries({ pageParam: page }),
    queryKey: ["movies", "discoveries", page],
    keepPreviousData: true,
  });
}

export { useGetDiscoveryPages };
