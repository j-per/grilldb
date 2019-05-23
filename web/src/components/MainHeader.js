import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  padding: 10px 50px;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  font-family: sans-serif;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Alfa Slab One", cursive;
    margin: 0;
    color: #f9f6f1;
    background: rgba(223, 60, 49, 1);
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1em;
  color: #f9f6f1;
  margin: 0;
  li {
    padding: 5px 10px;
    transition: 350ms;
    &:hover {
      color: #f9f6f1;
      background: rgba(223, 60, 49, 1);
      border-radius: 5px;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #f9f6f1;
  margin: 0 10px;
  &:hover {
    text-decoration: none;
  }
`;

const MainHeader = () => (
  <Header>
    <h1>GRILL DB</h1>
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
