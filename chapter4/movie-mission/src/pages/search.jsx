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
    top: 97px;
    left: 200px;
    width: calc(100% - 200px);
    height: calc(100vh - 97px);
    background-color: black;
`
const TextBox = styled.h1`
    margin: 20px;
    margin-bottom: -5px;
    color: white;
`