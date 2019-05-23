import React, { Component } from "react";

import styled from "styled-components";

import MainHeader from "../components/MainHeader";
import RecipeForm from "../components/dashboard/RecipeForm";
import RecentRecipes from "../components/dashboard/RecentRecipes";
import UserAccountInfo from "../components/dashboard/UserAccountInfo";

const GridContainer = styled.div`
  display: grid;
  padding: 0 50px;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 1rem;
  border-radius: 5px;
  @media (max-width: 700px) {
    grid-template-columns: initial;
    padding: 10px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.layout};
`;

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <MainHeader />
        <GridContainer>
          <FlexContainer layout="column">
            <UserAccountInfo />
            <RecentRecipes />
          </FlexContainer>
          <RecipeForm />
        </GridContainer>
      </div>
    );
  }
}

export default Dashboard;
