import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetDiscoveries } from "./queries/useGetDiscoveries";

function useGetInfiniteDiscoveries() {
    return useInfiniteQuery({
        queryFn: ({pageParam}) => useGetDiscoveries({pageParam}),
        queryKey: ['movies', 'discoveries'],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            const lastMovie = lastPage.results.at(-1);
            return lastMovie ? allPage?.length + 1 : undefined;            
        }
    })
}

export { useGetInfiniteDiscoveries };