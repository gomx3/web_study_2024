import styled from "styled-components";

import Card from "../components/Card";
import useCustomFetch from "../hooks/useCustomFetch";
import CardSkeleton from "../components/CardSkeleton";

const HomePage = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc`
  );

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
      {isLoading ? (
        <CardSkeleton num={15} />
      ) : (
        <MovieList>
          {data.data?.results.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
        </MovieList>
      )}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
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