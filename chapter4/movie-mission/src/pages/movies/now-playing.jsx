import styled from "styled-components";

import View from "../../components/View";
import useCustomFetch from "../../hooks/useCustomFetch";

const NowPlaying = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/movie/now_playing?language=ko-KR&page=1`
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
      <TextBox>현재 상영 중인 작품</TextBox>
      <View movies={data} />
    </Container>
  );
};

export default NowPlaying;

const Container = styled.div`
  position: fixed;
  top: 97px;
  left: 200px;
  padding: 20px;
  width: calc(100% - 240px);
  height: calc(100vh - 97px);
  background-color: black;
`;
const TextBox = styled.h1`
  color: white;
`;
