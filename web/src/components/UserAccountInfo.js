import React, { Component } from "react";
import profile_image from "../images/jesse.jpg";

const useraccountInfo_wrapper = {
  display: "flex",
  flexDirection: "column",
  background: "#d9d9d9",
  color: "white",
  position: "relative",
  color: "#312f30",
  boxShadow: "3px 3px 5px #282828"
};

const name_image_wrapper = {
  display: "flex",
  color: "#fff",
  background: "#768493",
  padding: "10px"
};

const profile_image_style = {
  width: "25%",
  height: "25%",
  border: "solid white 2px",
  borderRadius: "50%",
  marginRight: "1rem"
};

const name_wrapper = {
  display: "flex",
  flexDirection: "column"
};

const recipe_setting_wrapper = {
  display: "flex",
  padding: "10px"
};

const recipe_count_wrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "10px"
};

class UserAccountInfo extends Component {
  render() {
    return (
      <div style={useraccountInfo_wrapper}>
        <div style={name_image_wrapper}>
          <img src={profile_image} style={profile_image_style} />
          <div style={name_wrapper}>
            <h3>Jesse Perdue</h3>
            <p>@jesse_perdue</p>
          </div>
        </div>
        <div style={recipe_setting_wrapper}>
          <div style={recipe_count_wrapper}>
            <h5>Recipes</h5>
            <h4>25</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAccountInfo;
