import React, { Component } from "react";
import { Button } from "react-bootstrap";
import placeHolderImage from "../../images/placeholder.png";
import styled from "styled-components";

const API_GET_URL = `http://localhost:5000/recentRecipes`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1 rem;
  background: #f7f6f5;
  box-sahdow: 3px 3px 5px #282828;
  width: 310px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const h3Style = {
  borderRadius: "5px",
  color: "#FF740A",
  textAlign: "center",
  fontFamily: "Staatliches, cursive"
};

class RecentRecipes extends Component {
  state = {
    recipeList: [],
    loading: false
  };

  async componentDidMount() {
    const returnedRecipeList = await fetch(API_GET_URL).then(res => res.json());
    const secondLastRecipe =
      returnedRecipeList.recipes[returnedRecipeList.recipes.length - 2];
    const lastRecipe =
      returnedRecipeList.recipes[returnedRecipeList.recipes.length - 1];
    this.setState({
      recipeList: [lastRecipe, secondLastRecipe]
    });
    console.log(this.state);
  }

  render() {
    return (
      <Wrapper>
        <h3 style={h3Style}>Your Recent Recipes</h3>
        <h4>
          {this.state.recipeList[0]
            ? this.state.recipeList[0].recipeName
            : "No Recipe Available"}
        </h4>
        <img
          src={
            this.state.recipeList[0]
              ? this.state.recipeList[0].recipeImage
              : placeHolderImage
          }
          width="100%"
        />
        <br />
        <Button className="btn-warning my-1">View Recipe</Button>
        <h4>
          {this.state.recipeList[1]
            ? this.state.recipeList[1].recipeName
            : "No Recipe Available"}
        </h4>
        <img
          src={
            this.state.recipeList[1]
              ? this.state.recipeList[1].recipeImage
              : placeHolderImage
          }
          width="100%"
        />
        <br />
        <Button className="btn-warning my-1">View Recipe</Button>
      </Wrapper>
    );
  }
}

export default RecentRecipes;
