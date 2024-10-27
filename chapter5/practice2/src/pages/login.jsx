import { useState } from "react";
import styled from "styled-components";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  })

  console.log(touched);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  })

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value
    });
  }
  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true
    });
  }

  return (
    <Container>
      <LoginSection>
        <TitleBox>로그인</TitleBox>

        <InputBox>
          <StyledInput
            type={"email"}
            value={values.email}
            onBlur={() => handleBlur('email')}
            onChange={(e) => handleChangeInput('email', e.target.value)}
            placeholder="이메일을 입력해주세요!"
          />

          <StyledInput
            type={"password"}
            value={values.password}
            onBlur={() => handleBlur('password')}
            onChange={(e) => handleChangeInput('password', e.target.value)}
            placeholder="비밀번호를 입력해주세요!"
          />
          <LoginBtn type="submit">로그인</LoginBtn>
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
    &:hover { color: #fff; }
  }
  &:hover {
    color: black;
  }
`;
