import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetSearch } from "./queries/useGetSearch";

function useGetInfiniteSearch(query) {
    return useInfiniteQuery({
        queryFn: ({pageParam}) => useGetSearch({query, pageParam}),
        queryKey: ['movies', 'search', query],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            const lastMovie = lastPage.results.at(-1);
            return lastMovie ? allPage?.length + 1 : undefined;            
        }
    })
}

export { useGetInfiniteSearch };