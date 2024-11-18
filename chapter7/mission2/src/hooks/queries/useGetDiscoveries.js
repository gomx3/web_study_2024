import { axiosInstance } from "../../apis/axios-instance";

const useGetDiscoveries = async ({ pageParam }) => {
  const { data } = await axiosInstance.get(
    `/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=${pageParam}}&sort_by=popularity.desc`
  );

  return data;
};

export { useGetDiscoveries };
