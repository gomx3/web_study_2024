import { useQuery } from "@tanstack/react-query";
import { useGetDiscoveries } from "./queries/useGetDiscoveries";

function useGetDiscoveryPages() {
    return useQuery({
        queryFn: ({pageParam}) => useGetDiscoveries({pageParam}),
        queryKey: ['movies', 'discoveries'],
        keepPreviousData: true,
    })
}

export { useGetDiscoveryPages };