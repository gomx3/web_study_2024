import { axiosInstance } from "../../apis/axios-instance";

const useGetDetails = async ({ movieId }) => {
  const { data } = await axiosInstance.get(
    `/movie/${movieId}?language=ko-KR`
  );

  return data;
};

export { useGetDetails };
