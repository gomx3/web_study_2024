import styled from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <TextBox>로그인 페이지</TextBox>
    </Container>
  );
};

export default LoginPage;

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
