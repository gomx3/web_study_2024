import { useEffect } from "react";
import styled from "styled-components";

import Card from "../../components/view/Card";
import CardListSkeleton from "../../components/view/CardListSkeleton";
import { useGetInfiniteMovies } from "../../hooks/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import BeatLoader from "react-spinners/BeatLoader";

const UpComing = () => {
  const {
    data: movies,
    isPending,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteMovies("upcoming");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <TextBox>개봉 예정 중인 작품</TextBox>
      {isPending ? (
        <CardListSkeleton num={15} />
      ) : (
        <MovieList>
          {movies?.pages.map((page) => {
            return page.results.map((movie, _) => {
              return <Card movie={movie} key={movie.id} />;
            });
          })}
        </MovieList>
      )}
      <Spinner ref={ref}>
        {isFetching && <BeatLoader color="#ffffff" margin={5} />}
      </Spinner>
    </Container>
  );
};

export default UpComing;

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
const Spinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
