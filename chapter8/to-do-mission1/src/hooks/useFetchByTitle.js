import { useEffect } from "react";
import useCustomFetch from "./useCustomFetch";

const useFetchByTitle = (query) => {
  const url = query === "" ? "" : `?title=${query}`;

  useEffect(() => {
    const { data, isLoading, isError } = useCustomFetch(`/todo${url}`);
    return { data, isLoading, isError };
  }, [query])

};

export default useFetchByTitle;
