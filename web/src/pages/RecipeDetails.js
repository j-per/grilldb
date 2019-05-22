import React from "react";
import styled from "styled-components";

import MainHeader from "../components/MainHeader";

const API_URL = `http://localhost:5000/api/allrecipes/recipedetails`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  color: white;
  text-align: center;
`;

const Image = styled.img`
  width: 15%;
  align-self: center;
  margin-bottom: 5em;
`;

const StyledP = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
`;

class RecipeDetails extends React.Component {
  state = {
    recipe: "loading"
  };

  componentDidMount() {
    const recipeID = this.props.match.params.id;
    fetch(`http://localhost:5000/api/allrecipes/recipedetails/${recipeID}`)
      .then(res => res.json())
      .then(res => this.setState({ recipe: res }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    const {
      category,
      grillType,
      hours,
      minutes,
      instructions,
      recipeImage,
      recipeName
    } = this.state.recipe;
    return (
      <div>
        <MainHeader />
        <Wrapper>
          <StyledH1>{this.state.recipe ? recipeName : "Loading"}</StyledH1>
          <Image src={`http://localhost:5000/${recipeImage}`} />
          <StyledP>{instructions}</StyledP>
          <StyledP>Hours: {hours}</StyledP>
          <StyledP>Minutes: {minutes}</StyledP>
          <StyledP>Grill Type: {grillType}</StyledP>
          <StyledP>Category: {category}</StyledP>
        </Wrapper>
      </div>
    );
  }
}

export default RecipeDetails;
