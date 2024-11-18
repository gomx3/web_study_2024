import styled from "styled-components";

import View from "../../components/View";
import CardSkeleton from "../../components/CardSkeleton";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";

const NowPlaying = () => {

  const { data: movies, isPending, isError } = useQuery({
    queryFn: () => useGetMovies({ category: "now_playing", pageParam: 1 }),
    queryKey: ['movies', 'now_playing'],
    cacheTime: 10000, // 10초 동안 캐시 데이터 유지
    staleTime: 10000, 
  });

  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <TextBox>현재 상영 중인 작품</TextBox>
      {isPending ? <CardSkeleton num={15} /> : <View movies={movies} />}
    </Container>
  );
};

export default NowPlaying;

const Container = styled.div`
  position: fixed;
  top: 97px;
  left: 200px;
  width: calc(100% - 200px);
  height: calc(100vh - 97px);
  background-color: black;
  box-sizing: border-box;
  padding: 20px 35px;
`;
const TextBox = styled.h1`
  color: white;
`;
