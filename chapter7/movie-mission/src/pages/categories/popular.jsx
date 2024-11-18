import styled from "styled-components";

import View from "../../components/View";
import CardSkeleton from "../../components/CardSkeleton";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";

const Popular = () => {

  const { data: movies, isPending, isError } = useQuery({
    queryFn: () => useGetMovies({ category: "popular", pageParam: 1 }),
    queryKey: ['movies', 'popular'],
    cacheTime: 10000,
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
      <TextBox>인기 있는 작품</TextBox>
      {isPending ? <CardSkeleton num={15} /> : <View movies={movies} />}
    </Container>
  );
};

export default Popular;

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
