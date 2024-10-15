import { useParams } from "react-router-dom";
import styled from "styled-components";

import useCustomFetch from "../hooks/useCustomFetch";
import Detail from "../components/Detail";

const MovieDetailPage = () => {
  const {movieId} = useParams();
  const { data, isLoading, isError } = useCustomFetch(
    `/movie/${movieId}?language=ko-KR`
  );

  if (isLoading) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>로딩 중 입니다...</h1>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Detail movie={data}/>
    </Container>
  );
};

export default MovieDetailPage;

const Container = styled.div`
  position: fixed;
  top: 97px;
  left: 200px;
  width: calc(100% - 240px);
  height: calc(100vh - 97px);
  padding: 20px;
  background-color: black;
`;
const TextBox = styled.h1`
  color: white;
`;
