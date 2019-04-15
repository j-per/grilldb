import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const API_URL = `http://localhost:5000/post`;
const headingStyle = {
  borderRadius: "5px",
  color: "#FF740A",
  textAlign: "center",
  fontFamily: "Staatliches, cursive"
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
      instructions: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));

    e.preventDefault();

    this.setState({
      recipeName: "",
      category: "",
      grillType: "",
      hours: "",
      minutes: "",
      instructions: ""
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
            className="mb-5"
          >
            <h1
              style={{
                padding: "10px 0",
                margin: 0,
                textAlign: "center",
                fontFamily: "Staatliches, cursive",
                fontSize: "50px",
                borderBottom: "5px solid white"
              }}
            >
              Grill DB
            </h1>
          </header>
          <Container>
            <Row>
              <Col
                lg={4}
                id="add-recipe"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#d9d9d9",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px black"
                }}
                className="m-3 p-3"
              >
                <h3 style={headingStyle} className="mb-3">
                  Add Recipe
                </h3>
                <Form onSubmit={this.handleSubmit}>
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
                  />
                  <Form.Label htmlFor="category">Category:</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    id="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    className="mb-3"
                  >
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
                  >
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
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Control>
                  <Form.Control
                    as="select"
                    name="minutes"
                    id="minutes"
                    value={this.state.minutes}
                    onChange={this.handleChange}
                    className="mb-3"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
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
                  />
                  <Button type="submit" value="Submit" className="btn-warning">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col
                lg={4}
                id="recent-recipes"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#d9d9d9",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px black"
                }}
                className="m-3 p-3"
              >
                <h3 style={headingStyle}>Recent Recipes</h3>
              </Col>
              <Col
                lg={4}
                id="search-recipes"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#d9d9d9",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px black"
                }}
                className="m-3 p-3"
              >
                <h3 style={headingStyle}>Search Recipes</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
