import styled from "styled-components";

const SearchPage = () => {
    return (
        <Container>
            <TextBox>검색 페이지 야호~!</TextBox>
        </Container>
    );
};

export default SearchPage;

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