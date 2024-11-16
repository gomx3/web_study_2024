import styled from "styled-components";

import View from "../../components/View";
import useCustomFetch from "../../hooks/useCustomFetch";
import CardSkeleton from "../../components/CardSkeleton";

const UpComing = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/movie/upcoming?language=ko-KR&page=1`
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
      <TextBox>개봉 예정 중인 작품</TextBox>
      {isLoading ? <CardSkeleton num={15} /> : <View movies={data} />}
    </Container>
  );
};

export default UpComing;

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
