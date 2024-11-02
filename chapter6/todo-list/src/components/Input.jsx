import React from "react";
import styled from "styled-components";

function Input({ className, value, task, onChange, placeholder = "" }) {
  return (
    <StyledInput
      className={className}
      value={value}
      defaultValue={task}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 13px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #bdaf9d;
  }
  background-color: ${(props) =>
    props.className === "dark" ? "#212426" : "#fff"};
  color: ${(props) => 
    props.className === "dark" ? "#fff" : "#000"};
`;
