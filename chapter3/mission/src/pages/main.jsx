import styled from "styled-components";

const MainPage = () => {
    return (
        <Container>
            <TextBox>메인 페이지 ㅡ.,ㅡ</TextBox>
        </Container>
    );
};

export default MainPage;

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