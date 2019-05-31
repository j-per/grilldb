import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 8px 20px;
  background-color: #de3c31;
  border-radius: 5px;
  border: none;
  color: white;
  transition: 200ms;
  &:hover {
    background-color: #af251c;
    color: white;
  }
`;

export default Button;
