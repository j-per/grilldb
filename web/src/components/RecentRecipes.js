import React from "react";

const RECENT_RECIPES_API = `http://localhost:5000/recentrecipes`;

class RecentRecipe extends React.Component {
  componentDidMount() {
    fetch(RECENT_RECIPES_API)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>This is the Recent Recipe Section</h1>
      </div>
    );
  }
}

export default RecentRecipe;
