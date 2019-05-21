import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.section`
  padding: 25px 25px;
  font-family: "Staatliches, cursive";
  border-bottom: 5px solid white;
  background: #ff740a;
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  font-family: sans-serif;
  justify-content: space-between;
  align-items: flex-end;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-contene: center;
  font-size: 1em;

  li {
    border-bottom: 2px solid transparent;
    &:hover {
      color: #fff;
      border-bottom: 2px solid black;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin: 0 10px;
  &:hover {
    text-decoration: none;
  }
`;

const MainHeader = () => (
  <Header>
    <h1>Grill DB</h1>
    <List>
      <StyledLink to="/">
        <li>Home</li>
      </StyledLink>
      <StyledLink to="/dashboard">
        <li>Dashboard</li>
      </StyledLink>
      <StyledLink to="/allrecipes">
        <li>All Recipes</li>
      </StyledLink>
    </List>
  </Header>
);

export default MainHeader;
