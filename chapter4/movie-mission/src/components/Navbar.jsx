import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <LogoLink to={'/'}>GOMCHA</LogoLink>
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
    margin: 30px 50px;
    color: #FF007C;
    text-decoration: none;
    font-size: 30px;
    font-family: Roboto;
    font-weight: 600;
`
const AuthSection = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 50px;
`
const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 25px;
    padding: 7px 10px;
    margin-left: 10px;
    background-color: #121212;
    color: white;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    font-size: 15px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #FF007C;
    }
`