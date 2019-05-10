import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import BBQ from "../images/1371591192937.jpeg";
import placeHolderImage from "../images/placeholder.png";

const API_GET_URL = `http://localhost:5000/test`;

const cardStyle = {
  display: "flex",
  flexDirection: "column"
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
      <div className={cardStyle}>
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
        <Button className="btn-warning my-3">View Recipe</Button>
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
        <Button className="btn-warning my-3">View Recipe</Button>
      </div>
    );
  }
}

export default RecentRecipes;
