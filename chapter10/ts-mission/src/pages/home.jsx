import { useState } from "react";
import styled from "styled-components";

import Card from "../components/view/Card";
import CardListSkeleton from "../components/view/CardListSkeleton";
import { useGetDiscoveryPages } from "../hooks/useGetDiscoveryPages";

const HomePage = () => {
  const [page, setPage] = useState(0);
  const {
    data: movies,
    isPending,
    isError,
  } = useGetDiscoveryPages(page + 1);

  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <TextBox>홈</TextBox>
      {isPending ? (
        <CardListSkeleton num={15} />
      ) : (
        <MovieList>
          {movies?.results.map((movie, _) => {
            return <Card movie={movie} key={movie.id} />;
          })}
        </MovieList>
      )}
      <Pagination>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          이전
        </button>
        <span style={{ color: "white" }}>{page + 1} 페이지</span>
        <button onClick={() => setPage((old) => old + 1)}>다음</button>
      </Pagination>
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
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
`;
const TextBox = styled.h1`
  color: white;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  button {
    background: #555;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 8px 12px;
    cursor: pointer;
    background-color: #ff007c;
    transition: color 0.3s ease;

    &:disabled {
      background: #333;
    }
    &:hover {
      color: black;
    }
  }
`;