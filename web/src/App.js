import React, { Component } from "react";

const headingStyle = {
  padding: "10px 10px",
  border: "solid 1px black",
  borderRadius: "5px",
  background: "#d9d9d9",
  color: "#FF740A"
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: "",
      category: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      recipeName: "",
      category: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header
            style={{
              background: "#FF740A"
            }}
          >
            <h2
              style={{
                padding: "10px 0",
                margin: 0,
                textAlign: "center"
              }}
            >
              Grill DB
            </h2>
          </header>
          <main
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap"
            }}
          >
            <div
              id="add-recipe"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3 style={headingStyle}>Add Recipe</h3>
              <form onSubmit={this.handleSubmit}>
                <input
                  name="recipeName"
                  type="text"
                  value={this.state.recipeName}
                  onChange={this.handleChange}
                  style={{ display: "block" }}
                />
                <select
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                  style={{ display: "block" }}
                >
                  <option value="beef">Beef</option>
                  <option value="poultry">Poultry</option>
                  <option value="fish">Fish</option>
                  <option value="pork">Pork</option>
                </select>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </div>
            <div id="recent-recipes">
              <h3 style={headingStyle}>Recent Recipes</h3>
            </div>
            <div id="search-recipes">
              <h3 style={headingStyle}>Search Recipes</h3>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
