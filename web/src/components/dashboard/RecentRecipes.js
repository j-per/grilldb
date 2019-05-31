import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import placeHolderImage from "../../images/placeholder.png";
import styled from "styled-components";

const API_GET_URL = `http://localhost:5000/api/allrecipes`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
  margin: 1 rem;
  background: #f9f6f1;
  box-sahdow: 3px 3px 5px #282828;
  width: 350px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const h3Style = {
  borderRadius: "5px",
  color: "#f9f6f1",
  textAlign: "center",
  fontFamily: "Staatliches, cursive",
  background: "#de3c31",
  padding: "5px 15px",
  textDecoration: "underline"
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
  }

  render() {
    return (
      <Wrapper>
        <h3 style={h3Style}>Your Recent Recipes</h3>
        <h5>
          {this.state.recipeList[0]
            ? this.state.recipeList[0].recipeName
            : "No Recipe Available"}
        </h5>
        <img
          src={
            this.state.recipeList[0]
              ? this.state.recipeList[0].recipeImage
              : placeHolderImage
          }
          width="100%"
        />
        <br />
        <Link to={`/allrecipes/recipedetails`}>
          <Button>View Recipe</Button>
        </Link>
        <h5>
          {this.state.recipeList[1]
            ? this.state.recipeList[1].recipeName
            : "No Recipe Available"}
        </h5>
        <img
          src={
            this.state.recipeList[1]
              ? this.state.recipeList[1].recipeImage
              : placeHolderImage
          }
          width="100%"
        />
        <br />
        <Link to={`/allrecipes/recipedetails`}>
          <Button>View Recipe</Button>
        </Link>
      </Wrapper>
    );
  }
}

export default RecentRecipes;
