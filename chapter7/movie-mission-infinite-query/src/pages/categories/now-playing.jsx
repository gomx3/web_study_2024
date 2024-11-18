import styled from "styled-components";

import View from "../../components/View";
import Card from "../../components/Card";
import CardSkeleton from "../../components/CardSkeleton";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import { useGetInfiniteMovies } from "../../hooks/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";

const NowPlaying = () => {
  // const { data: movies, isPending, isError } = useQuery({
  //   queryFn: () => useGetMovies({ category: "now_playing", pageParam: 1 }),
  //   queryKey: ['movies', 'now_playing'],
  //   cacheTime: 10000, // 10초 동안 캐시 데이터 유지
  //   staleTime: 10000,
  // });

  const { data: movies, isPending } = useGetInfiniteMovies("now_playing");

  // if (isError) {
  //   return (
  //     <Container>
  //       <h1 style={{ color: "white" }}>에러 발생...</h1>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <TextBox>현재 상영 중인 작품</TextBox>
      <MovieList>
        {movies?.pages.map((page) => {
          return page.results.map((movie, _) => {
            return <Card movie={movie} key={movie.id} />;
          });
        })}
      </MovieList>
      <Flag>
        <h1>유우시보고싶다씨발</h1>
      </Flag>
      {/* {isPending ? <CardSkeleton num={15} /> : <View movies={movies} />} */}
    </Container>
  );
};

export default NowPlaying;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 97px;
  left: 200px;
  width: calc(100% - 200px);
  height: calc(100vh - 97px);
  background-color: black;
  box-sizing: border-box;
  padding: 20px 35px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;
const TextBox = styled.h1`
  color: white;
`;
const Flag = styled.div`
  background-color: skyblue;
  width: 100px;
`;
