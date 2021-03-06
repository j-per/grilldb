import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "../elements/Button";
import axios from "axios";
import styled from "styled-components";

const API_URL = `http://localhost:5000/api/post`;

//Styles
const h3Style = {
  borderRadius: "5px",
  color: "#f9f6f1",
  textAlign: "center",
  fontFamily: "Staatliches, cursive",
  background: "#de3c31",
  padding: "5px 15px",
  textDecoration: "underline"
};

const formFontStyle = {
  color: "#1f1f1f"
};

const Wrapper = styled.div`
  background-color: #f9f6f1;
  padding: 1rem;
  align-self: start;
  box-sahdow: 3px 3px 5px #282828;
  width: 350px;
  border-radius: 5px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: "",
      category: "",
      grillType: "",
      hours: "",
      minutes: "",
      instructions: "",
      recipeImage: "",
      recipeImagePreview: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timeLoop = this.timeLoop.bind(this);
  }

  //Handle submit action
  handleSubmit(e) {
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
        this.setState({
          recipeImage: e.target.files[0],
          recipeImagePreview: URL.createObjectURL(e.target.files[0])
        });
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
    console.log(this.state.recipeImage);
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
      <Wrapper>
        <h3 style={h3Style} className="mb-3">
          Add Recipe
        </h3>
        <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Form.Label htmlFor="recipeName" style={formFontStyle}>
            Recipe Name:
          </Form.Label>
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
          <Form.Label htmlFor="category" style={formFontStyle}>
            Category:
          </Form.Label>
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
          <Form.Label htmlFor="grillType" style={formFontStyle}>
            Grill Type:
          </Form.Label>
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
          <Form.Label htmlFor="time" style={formFontStyle}>
            Cook Time:
          </Form.Label>
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
          <Form.Label htmlFor="instructions" style={formFontStyle}>
            Instructions:
          </Form.Label>
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
          <Form.Label htmlFor="image" style={formFontStyle}>
            Image:
          </Form.Label>
          <br />
          <input
            type="file"
            name="recipeImage"
            id="recipeImage"
            onChange={this.handleChange}
            className="mb-3"
            required
            style={formFontStyle}
          />
          <img
            src={this.state.recipeImagePreview}
            width="100%"
            className="mb-3"
          />
          <br />
          <Button type="submit" value="Submit" className="btn-warning">
            Submit
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default RecipeForm;
