import styled from "styled-components";

const SignupPage = () => {
  return (
    <Container>
      <TextBox>회원 가입</TextBox>
    </Container>
  );
};

export default SignupPage;

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
