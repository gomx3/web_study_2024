import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <LogoLink to={'/'}>GOMFLIX</LogoLink>
            <AuthSection>
                <ButtonLink to={'/login'}>로그인</ButtonLink>
                <ButtonLink to={'/signup'}>회원가입</ButtonLink>
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
`
const LogoLink = styled(Link)`
    left: 10px;
    margin: 20px 30px;
    color: #E50914;
    text-decoration: none;
    font-size: 30px;
    font-family: Roboto;
    font-weight: 600; // 폰트 굵기
`
const AuthSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`
const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 7px 10px;
    margin-left: 10px;
    background-color: #121212;
    color: white;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #E50914;
    }
`