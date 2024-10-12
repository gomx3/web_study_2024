import React from 'react';
import styled from 'styled-components';

function Button({ children, onClick }) {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;


const Btn = styled.button`
  min-width: 50px;
  padding: 3px 6px;
  margin-left: 7px;
  border: none;
  border-radius: 10px;
  background-color: #99c7ef;
  color: #461220;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #aaaaaa;
  }
`;