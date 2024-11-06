import styled from "styled-components";

const SearchPage = () => {
  return (
    <Container>
      <InputWrapper>
        <StyledInput placeholder="영화 제목을 입력해주세요..." />
        <Btn>검색</Btn>
      </InputWrapper>
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
  box-sizing: border-box;
  padding: 20px 35px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  font-size: 15px;
`;
const Btn = styled.button`
  padding: 10px;
  width: 70px;
  color: white;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 15px;
  background-color: #ff007c;

  &:hover {
    transition: color 0.3s ease;
    color: black;
  }
`;
