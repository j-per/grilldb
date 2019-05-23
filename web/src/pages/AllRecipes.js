import React from "react";
import styled from "styled-components";

import MainHeader from "../components/MainHeader";
import RecipeCard from "../components/allrecipes/RecipeCard";
import PlaceHolderImage from "../images/placeholder.png";

const URI = `http://localhost:5000/api/recentRecipes`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class AllRecipes extends React.Component {
  state = {
    recipes: []
  };

  //Fetch data from the server
  componentDidMount() {
    fetch(URI)
      .then(res => res.json())
      .then(json =>
        this.setState({
          recipes: json.recipes
        })
      )
      .catch(err => console.log(err));
  }

  //Checks to see if title length is more than 18 characters so that it can fit inside the card
  reduceTitle(title) {
    if (title.length > 18) {
      const splitTitle = title.split("");
      splitTitle.length = 17;
      const returnedTitle = `${splitTitle.join("")}...`;
      return returnedTitle;
    } else {
      return title;
    }
  }

  render() {
    const recipeCardProps = this.state.recipes.map(recipe => {
      return (
        <RecipeCard
          title={this.reduceTitle(recipe.recipeName)}
          user="@jesse_perdue"
          image={recipe.recipeImage || PlaceHolderImage}
          key={recipe.recipeID}
          id={recipe.recipeID}
        />
      );
    });
    return (
      <div>
        <MainHeader />
        <Wrapper>{recipeCardProps}</Wrapper>
      </div>
    );
  }
}

export default AllRecipes;
