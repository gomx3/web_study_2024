import styled from "styled-components";

const LoginPage = () => {
    return (
        <Container>
            <TextBox>로그인 페이지</TextBox>
        </Container>
    );
};

export default LoginPage;

const Container = styled.div`
    position: fixed;
    top: 77px;
    left: 150px;
    width: 100%;
    height: 100vh;
    background-color: black;
`
const TextBox = styled.h1`
    margin: 20px;
    color: white;
`