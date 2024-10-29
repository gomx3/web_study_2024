import styled from "styled-components";

import View from "../components/View";
import useCustomFetch from "../hooks/useCustomFetch";

const USER_ID = import.meta.env.USER_ID;

const HomePage = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/account/${USER_ID}/favorite/movies?language=ko-KR&page=1&sort_by=created_at.asc`
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
      <TextBox>홈</TextBox>
      <View movies={data} />
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
`;
const TextBox = styled.h1`
  color: white;
`;