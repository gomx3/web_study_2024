import { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [name, setName] = useState('');

  const getUserName = () => {
    if (isValid) {

      fetch('http://localhost:3000/auth/login', {
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
        localStorage.setItem('refreshToken', data.refreshToken)
        localStorage.setItem('accessToekn', data.accessToken)
        console.log('Success:', data);
        alert('로그인 성공');

        navigate('/');
        window.location.reload(); // 새로고침 해야 이름이 변경 됨
      })
      .catch(error => {
        console.error('Error:', error);
        alert('로그인에 실패했습니다. 다시 시도해 주세요.');
      });
    }
  }

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    setName('');
  }

  return (
    <Container>
      <LogoLink to={"/"}>GOMCHA</LogoLink>
      <AuthSection>
        {name ? (<>
          <p style={{ color: "#aeaeae", fontFamily: "Roboto" }}>{name} 님 반갑습니다!</p>
          <ButtonLink to={"/"} className="login" onClick={handleLogout}>
          로그아웃
          </ButtonLink>
        </>) : (<>
          <ButtonLink to={"/login"} className="login">
          로그인
          </ButtonLink>
          <ButtonLink to={"/signup"} className="signup">
          회원가입
          </ButtonLink>
        </>)}
      </AuthSection>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
`;
const LogoLink = styled(Link)`
  left: 10px;
  margin: 30px 50px;
  color: #ff007c;
  text-decoration: none;
  font-size: 30px;
  font-family: Roboto;
  font-weight: 600;
`;
const AuthSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 50px;
`;
const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 25px;
  padding: 7px 10px;
  margin-left: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 15px;

  &.login {
    background-color: #121212;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #ff007c;
    }
  }
  &.signup {
    background-color: #ff007c;
    transition: color 0.3s ease;
    &:hover {
      color: black;
    }
  }
`;
