import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AllRecipes from "./pages/AllRecipes";
import RecipeDetails from "./pages/RecipeDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/allrecipes" exact component={AllRecipes} />
          <Route
            path="/allrecipes/recipedetails/:id"
            component={RecipeDetails}
          />
        </div>
      </Router>
    );
  }
}

export default App;
