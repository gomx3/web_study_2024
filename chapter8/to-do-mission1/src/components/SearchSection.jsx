import { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const SearchSection = ({ setQueryParam }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setQueryParam(inputText);
  };

  return (
    <FormWrapper>
      <SearchBox
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="제목으로 검색"
      />
      <SearchButton onClick={handleSubmit}>
        <IoSearch />
      </SearchButton>
    </FormWrapper>
  );
};

export default SearchSection;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 7px 0;
`;
const SearchBox = styled.input`
  padding: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 180px;
`;
const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 3px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
