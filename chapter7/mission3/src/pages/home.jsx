import { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "../components/view/Card";
import CardListSkeleton from "../components/view/CardListSkeleton";
import { useInView } from "react-intersection-observer";
import BeatLoader from "react-spinners/BeatLoader";
import { useGetDiscoveryPages } from "../hooks/useGetDiscoveryPages";

const HomePage = () => {
  const [page, setPage] = useState(0);
  const {
    data: movies,
    isPending,
    isFetching,
    isError,
    isPreviousData,
    hasNextPage,
    fetchNextPage,
  } = useGetDiscoveryPages();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {

  }, [isFetching, hasNextPage, fetchNextPage]);

  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </Container>
    );
  }

  return (
    <Container>
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
      <span style={{ color: "white" }}>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 0))}
        disabled={page === 0}>
          Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPreviousData && hasNextPage) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !hasNextPage}
      >
        Next Page
      </button>
      <Spinner ref={ref}>
        {isFetching && <BeatLoader color="#ffffff" margin={5} />}
      </Spinner>
    </Container>
  );
};

export default HomePage;

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
const Spinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
