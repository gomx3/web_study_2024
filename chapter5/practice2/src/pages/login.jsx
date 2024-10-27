import styled from "styled-components";
import useForm from "../hooks/useForm.js";
import { validateLogin } from "../utils/validate.js";

const LoginPage = () => {
  const login = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );

  return (
    <Container>
      <LoginSection>
        <TitleBox>로그인</TitleBox>

        <InputBox>
          <StyledInput
            error={login.touched.email && login.errors.email}
            type={"email"}
            placeholder="이메일을 입력해주세요!"
            {...login.getTextInputProps("email")}
          />
          {login.touched.email && login.errors.email && (
            <StyledErrorMsg>{login.errors.email}</StyledErrorMsg>
          )}

          <StyledInput
            error={login.touched.password && login.errors.password}
            type={"password"}
            placeholder="비밀번호를 입력해주세요!"
            {...login.getTextInputProps("password")}
          />
          {login.touched.password && login.errors.password && (
            <StyledErrorMsg>{login.errors.password}</StyledErrorMsg>
          )}
          
          <LoginBtn disabled={login.errors.email || login.errors.password}>로그인</LoginBtn>
        
        </InputBox>
      </LoginSection>
    </Container>
  );
};

export default LoginPage;

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
const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 330px;
`;
const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #ccc")}
`;
const StyledErrorMsg = styled.p`
  margin: 0 10px;
  color: red;
  font-size: 13px;
`;
const LoginBtn = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #ff007c;
  transition: color 0.3s ease;
  &:disabled {
    background-color: #ccc;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  &:hover {
    color: black;
  }
`;
