import React from 'react';
import styled from 'styled-components';

function Input({ value, task, onChange, placeholder='' }) {
  return (
    <StyledInput
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
  border-radius: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: 0 0 3px #396fb1;
  }
  ${({ theme }) => `
    background-color: ${theme.background};
    color: ${theme.color};
  `}
`;