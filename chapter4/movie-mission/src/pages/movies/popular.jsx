import styled from "styled-components";

import View from "../../components/View";
import useCustomFetch from "../../hooks/useCustomFetch";

const Popular = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/movie/popular?language=ko-KR&page=1`
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
      <TextBox>인기 있는 작품</TextBox>
      <View movies={data} />
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
`;
const TextBox = styled.h1`
  margin: 20px;
  margin-bottom: -5px;
  color: white;
`;
