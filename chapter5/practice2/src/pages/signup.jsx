import styled from "styled-components";
import useForm from "../hooks/useForm";
import { validateSignup } from "../utils/validate";

const SignupPage = () => {
  const signup = useForm(
    {
      email: "",
      password: "",
      passwordCheck: "",
    },
    validateSignup
  );

  return (
    <Container>
      <Wrapper>
        <TitleBox>회원 가입</TitleBox>

        <InputBox>
          <StyledInput
            error={signup.touched.email && signup.errors.email}
            type="email"
            placeholder="이메일을 입력해주세요!"
            {...signup.getTextInputProps("email")}
          />
          {signup.touched.email && signup.errors.email && (
            <StyledErrorMsg>{signup.errors.email}</StyledErrorMsg>
          )}
          <StyledInput
            error={signup.touched.password && signup.errors.password}
            type="password"
            placeholder="비밀번호를 입력해주세요!"
            {...signup.getTextInputProps("password")}
          />
          {signup.touched.password && signup.errors.password && (
            <StyledErrorMsg>{signup.errors.password}</StyledErrorMsg>
          )}
          <StyledInput
            error={signup.touched.passwordCheck && signup.errors.passwordCheck}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요!"
            {...signup.getTextInputProps("passwordCheck")}
          />
          {signup.touched.passwordCheck && signup.errors.passwordCheck && (
            <StyledErrorMsg>{signup.errors.passwordCheck}</StyledErrorMsg>
          )}

          <Btn disabled={signup.errors.email || signup.errors.password || signup.errors.passwordCheck}>제출</Btn>
        
        </InputBox>
      </Wrapper>
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
const Wrapper = styled.div`
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
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #ccc")};
`;
const StyledErrorMsg = styled.p`
  margin: 0 10px;
  color: red;
  font-size: 13px;
`;
const Btn = styled.button`
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
