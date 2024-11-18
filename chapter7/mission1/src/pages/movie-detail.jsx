import { useParams } from "react-router-dom";
import styled from "styled-components";

import Detail from "../components/detail-page/Detail";
import { useQuery } from "@tanstack/react-query";
import { useGetDetails } from "../hooks/queries/useGetDetails";

const MovieDetailPage = () => {

  const { movieId } = useParams();
  const { data: movie, isPending, isError } = useQuery({
    queryFn: () => useGetDetails({ movieId }),
    queryKey: ['details', movieId],
    cacheTime: 10000,
    staleTime: 10000,
  })
  
  if (isPending) {
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
      <Detail movie={movie}/>
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