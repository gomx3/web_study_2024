import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Inputs from "../components/Inputs";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
      .matches(
        emailPattern,
        "올바른 이메일 형식이 아닙니다. 다시 확인해주세요!"
      )
      .required(),
    password: yup
      .string()
      .min(6, "비밀번호는 6~18자 사이로 입력해주세요!")
      .max(18, "비밀번호는 6~18자 사이로 입력해주세요!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // 입력 값이 변경될 때마다 실시간으로 email/password 필드의 유효성 검사를 진행
  useEffect(() => {
    trigger("email");
    trigger("password");
  }, [watch("email"), watch("password"), trigger]);

  return (
    <Container>
      <LoginSection>
        <TitleBox>로그인</TitleBox>

        <InputBox onSubmit={handleSubmit(onSubmit)}>
          <Inputs
            type="email"
            register={register("email")}
            placeholder={"이메일을 입력해주세요!"}
            touched={touchedFields.email}
            error={errors.email?.message}
          />
          <Inputs
            type="password"
            register={register("password")}
            placeholder={"비밀번호를 입력해주세요!"}
            touched={touchedFields.password}
            error={errors.password?.message}
          />

          <LoginBtn disabled={!isValid}>로그인</LoginBtn>
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
