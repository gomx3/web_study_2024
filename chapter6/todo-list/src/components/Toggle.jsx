import React from "react";
import styled from "styled-components";

function Toggle({ toggleTheme }) {
  return (
    <Switch>
      <input type="checkbox" onClick={toggleTheme} />
      <Slider className="slider round" />
    </Switch>
  );
}

export default Toggle;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 53px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b4d6ee;
  transition: 0.3s;

  &:before {
    position: absolute;
    content: "☀️";
    font-size: 23px;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    transition: 0.3s;
  }
  input:checked + & {
    background-color: #ccc;
  }
  input:checked + &:before {
    transform: translateX(20px);
    content: "🌝";
  }

  &.round {
    border-radius: 34px;
  }
`;