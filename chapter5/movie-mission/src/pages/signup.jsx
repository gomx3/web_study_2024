import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "styled-components";

const SignupPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(18).required(),
    passwordCheck: yup.string().min(6).max(18).required(),
  });

  const onSubmit = (data) => {
    console.log("회원 가입 시도");
    console.log(data);
  };

  return (
    <Container>
      <LoginSection>
        <TitleBox>회원 가입</TitleBox>

        <InputBox>
          <StyledInput type="email" placeholder="이메일을 입력해주세요!" />
          <StyledInput type="password" placeholder="비밀번호를 입력해주세요!" />
          <StyledInput
            type="passwordCheck"
            placeholder="비밀번호를 다시 입력해주세요!"
          />
          <LoginBtn>제출</LoginBtn>
        </InputBox>
      </LoginSection>
    </Container>
  );
};

export default SignupPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 97px;
  left: 200px;
  width: calc(100% - 200px);
  height: calc(100vh - 97px);
  background-color: black;
`;
const LoginSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -43px;
`;
const TitleBox = styled.h1`
  color: white;
  margin: 0 0 10px 0;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
`;
const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
`;
const LoginBtn = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #ff007c;
  transition: color 0.3s ease;
  &:hover {
    color: black;
  }
`;
