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
      <MsgContainer>
        <h1 style={{ color: "white" }}>로딩 중 입니다...</h1>
      </MsgContainer>
    );
  }
  if (isError) {
    return (
      <MsgContainer>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </MsgContainer>
    );
  }

  return (
    <Container>
      <Detail movie={data}/>
    </Container>
  );
};

export default MovieDetailPage;

const MsgContainer = styled.div`
  position: fixed;
  top: 97px;
  left: 200px;
  bottom: 0px;
  width: calc(100% - 200px);
  height: calc(100% - 97px);
  background-color: black;
  box-sizing: border-box;
  padding: 20px 35px;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 97px;
  left: 200px;
  bottom: 0px;
  width: calc(100% - 200px);
  height: calc(100% - 97px);
  background-color: black;
  box-sizing: border-box;
  padding: 50px;
`;