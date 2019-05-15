import React, { Component } from "react";
import styled from "styled-components";

import RecipeForm from "./components/RecipeForm";
import RecentRecipes from "./components/RecentRecipes";
import UserAccountInfo from "./components/UserAccountInfo";

const GridContainer = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;

  @media (max-width: 700px) {
    grid-template-columns: initial;
    padding: 10px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.layout};
`;

const Span = styled.div`
  grid-column: ${props => `${props.start} / ${props.end}`};
  grid-row: ${props => props.row};
`;

const h1Style = {
  padding: "10px 0",
  margin: 0,
  textAlign: "center",
  fontFamily: "Staatliches, cursive",
  fontSize: "50px",
  borderBottom: "5px solid white"
};

const h3Style = {
  borderRadius: "5px",
  color: "#FF740A",
  textAlign: "center",
  fontFamily: "Staatliches, cursive"
};

const colStyle = {
  background: "#d9d9d9",
  boxShadow: "3px 3px 5px #282828",
  position: "relative"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header
            style={{
              background: "#FF740A",
              width: "100%"
            }}
            className="mb-5"
          >
            <h1 style={h1Style}>Grill DB</h1>
          </header>
          <GridContainer>
            <FlexContainer layout="column">
              <UserAccountInfo />
              <RecentRecipes />
            </FlexContainer>
            <RecipeForm />
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default App;
