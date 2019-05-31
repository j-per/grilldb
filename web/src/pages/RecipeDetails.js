import React from "react";
import styled from "styled-components";

import MainHeader from "../components/MainHeader";

const API_URL = `http://localhost:5000/api/allrecipes/recipedetails`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DirectionsWrapper = styled.div`
  background: #f9f6f1;
  padding: 1rem;
  margin: 3.5rem 1rem;
  width: 500px;
  height: auto;
`;

const StyledH1 = styled.h1`
  color: #f9f6f1;
  text-decoration: underline;
`;

const Image = styled.img`
  align-self: center;
  width: 300px;
  height: auto;
  margin-bottom: 5em;
  object-fit: cover;
  border: 5px solid #f9f6f1;
`;

const StyledP = styled.p`
  font-size: 20px;
`;

const StyledH5 = styled.h5`
  color: #f9f6f1;
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
          <ImageTimeWrapper>
            <StyledH1>{this.state.recipe ? recipeName : "Loading"}</StyledH1>
            <Image src={`http://localhost:5000/${recipeImage}`} />
            <StyledH5>Hours: {hours}</StyledH5>
            <StyledH5>Minutes: {minutes}</StyledH5>
            <StyledH5>Grill Type: {grillType}</StyledH5>
            <StyledH5>Category: {category}</StyledH5>
          </ImageTimeWrapper>
          <DirectionsWrapper>
            <h3>Directions:</h3>
            <StyledP>{instructions}</StyledP>
          </DirectionsWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default RecipeDetails;
