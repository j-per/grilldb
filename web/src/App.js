import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import RecentRecipes from "./components/RecentRecipes";

const API_URL = `http://localhost:5000/post`;

//Styles
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
  borderRadius: "5px",
  boxShadow: "0 0 10px black",
  position: "relative"
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: "",
      category: "",
      grillType: "",
      hours: "",
      minutes: "",
      instructions: "",
      recipeImage: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timeLoop = this.timeLoop.bind(this);
  }

  //Handle submit action
  handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData();
    const recipe = this.state;
    for (const key in recipe) {
      fd.append(key, recipe[key]);
    }

    axios.post(API_URL, fd);

    this.setState({
      recipeName: "",
      category: "",
      grillType: "",
      hours: "",
      minutes: "",
      instructions: "",
      recipeImage: ""
    });
  }

  //Handle change function
  handleChange(e) {
    switch (e.target.name) {
      case "recipeImage":
        this.setState({ recipeImage: e.target.files[0] });
        break;
      default:
        this.setState({
          [e.target.name]: e.target.value
        });
    }
  }

  //Function to output options in select field
  timeLoop(maxNum) {
    const timeArray = [];
    for (let i = 0; i <= maxNum; i++) {
      timeArray.push(i);
    }
    return timeArray;
  }

  render() {
    const hours = this.timeLoop(20);
    const hoursOption = hours.map(num => (
      <option value={num} key={num}>
        {num}
      </option>
    ));
    const minutes = this.timeLoop(60);
    const minutesOption = minutes.map(num => (
      <option value={num} key={num}>
        {num}
      </option>
    ));

    return (
      <div className="App">
        <div className="wrapper">
          <header
            style={{
              background: "#FF740A"
            }}
            className="mb-5"
          >
            <h1 style={h1Style}>Grill DB</h1>
          </header>
          <Container>
            <Row>
              <Col lg={4} id="add-recipe" style={colStyle} className="m-3 p-3">
                <h3 style={h3Style} className="mb-3">
                  Add Recipe
                </h3>
                <Form
                  onSubmit={this.handleSubmit}
                  encType="multipart/form-data"
                >
                  <Form.Label htmlFor="recipeName">Recipe Name:</Form.Label>
                  <Form.Control
                    name="recipeName"
                    id="recipeName"
                    type="text"
                    value={this.state.recipeName}
                    onChange={this.handleChange}
                    className="mb-3"
                    placeholder="Recipe Name"
                    autoComplete="off"
                    required
                  />
                  <Form.Label htmlFor="category">Category:</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    id="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    className="mb-3"
                    required
                  >
                    <option value="" default />
                    <option value="beef">Beef</option>
                    <option value="poultry">Poultry</option>
                    <option value="fish">Fish</option>
                    <option value="pork">Pork</option>
                  </Form.Control>
                  <Form.Label htmlFor="grillType">Grill Type:</Form.Label>
                  <Form.Control
                    as="select"
                    name="grillType"
                    id="grillType"
                    value={this.state.grillType}
                    onChange={this.handleChange}
                    className="mb-3"
                    required
                  >
                    <option value="" default />
                    <option value="kamado">Kamado</option>
                    <option value="pellet">Pellet</option>
                    <option value="charcoal">Charcoal</option>
                    <option value="gas">Gas</option>
                  </Form.Control>
                  <Form.Label htmlFor="time">Cook Time:</Form.Label>
                  <Form.Control
                    as="select"
                    name="hours"
                    id="hours"
                    value={this.state.hours}
                    onChange={this.handleChange}
                    className="mb-3"
                    required
                  >
                    <option value="" default />
                    {hoursOption}
                  </Form.Control>
                  <Form.Control
                    as="select"
                    name="minutes"
                    id="minutes"
                    value={this.state.minutes}
                    onChange={this.handleChange}
                    className="mb-3"
                    required
                  >
                    <option value="" default />
                    {minutesOption}
                  </Form.Control>
                  <Form.Label htmlFor="instructions">Instructions:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="instructions"
                    id="instructions"
                    rows="5"
                    value={this.state.instructions}
                    onChange={this.handleChange}
                    className="mb-3"
                    required
                  />
                  <Form.Label htmlFor="image">Image:</Form.Label>
                  <br />
                  <input
                    type="file"
                    name="recipeImage"
                    id="recipeImage"
                    onChange={this.handleChange}
                    className="mb-3"
                    required
                  />
                  <br />
                  <Button type="submit" value="Submit" className="btn-warning">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col
                lg={4}
                id="recent-recipes"
                style={colStyle}
                className="m-3 p-3"
              >
                <h3 style={h3Style}>Your Recent Recipes</h3>
                <RecentRecipes />
              </Col>
              <Col
                lg={2}
                id="search-recipes"
                style={colStyle}
                className="m-3 p-3"
              >
                <h3 style={h3Style}>Search Recipes</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
