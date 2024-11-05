import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Inputs from "../components/Inputs";
import { useNavigate } from "react-router-dom";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignupPage = () => {
  const navigate = useNavigate();
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
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호가 일치하지 않습니다."),
  });

  const { register, handleSubmit, formState: { errors, touchedFields, isValid },
          trigger, watch, reset, } = useForm({ resolver: yupResolver(schema), });

  const onSubmit = (data) => {
    if (isValid) {
      const userData = {
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck,
      };

      fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('회원가입 성공');
        navigate('/login');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
      });
    }
    reset();
  };

  useEffect(() => {
    trigger("email");
    trigger("password");
    trigger("passwordCheck");
  }, [watch("email"), watch("password"), watch("passwordCheck"), trigger]);

  return (
    <Container>
      <Wrapper>
        <TitleBox>회원 가입</TitleBox>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Inputs
            type="email"
            register={register("email")}
            placeholder="이메일을 입력해주세요!"
            touched={touchedFields.email}
            error={errors.email?.message}
          />
          <Inputs
            type="password"
            register={register("password")}
            placeholder="비밀번호를 입력해주세요!"
            touched={touchedFields.password}
            error={errors.password?.message}
          />
          <Inputs
            type="password"
            register={register("passwordCheck")}
            placeholder="비밀번호를 다시 입력해주세요!"
            touched={touchedFields.passwordCheck}
            error={errors.passwordCheck?.message}
          />
          <Btn disabled={!isValid}>제출</Btn>
        </StyledForm>
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 330px;
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
