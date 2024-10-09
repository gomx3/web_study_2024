import styled from "styled-components";

const SignupPage = () => {
    return (
        <Container>
            <TextBox>회원가입 페이지</TextBox>
        </Container>
    );
};

export default SignupPage;

const Container = styled.div`
    position: fixed;
    top: 97px;
    left: 200px;
    width: 100%;
    height: 100vh;
    background-color: black;
`
const TextBox = styled.h1`
    margin: 20px;
    margin-bottom: -5px;
    color: white;
`