import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import RecipeForm from "./components/RecipeForm";
import RecentRecipes from "./components/RecentRecipes";
import UserAccountInfo from "./components/UserAccountInfo";

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
  boxShadow: "3px 3px 5px #282828",
  position: "relative"
};

class App extends Component {
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
            <h1 style={h1Style}>Grill DB</h1>
          </header>
          <Row>
            <Col lg={3} xs className="m-3" style={{ alignSelf: "flex-start" }}>
              <UserAccountInfo />
            </Col>
            <Col lg={3} id="add-recipe" style={colStyle} className="p-3 m-2">
              <RecipeForm />
            </Col>
            <Col
              lg={3}
              id="recent-recipes"
              style={colStyle}
              className="m-2 p-3"
            >
              <h3 style={h3Style}>Your Recent Recipes</h3>
              <RecentRecipes />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
