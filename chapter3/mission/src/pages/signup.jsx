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