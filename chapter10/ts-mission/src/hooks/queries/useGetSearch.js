import { axiosInstance } from "../../apis/axios-instance";

const useGetSearch = async ({ query, pageParam }) => {
  const { data } = await axiosInstance.get(
    `/search/movie?query=${query}&include_adult=false&language=ko-KR&page=${pageParam}`
  );

  return data;
};

export { useGetSearch };
