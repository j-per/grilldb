import React, { Component } from "react";
import profile_image from "../images/jesse.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f6f5;
  color: white;
  position: relative;
  color: #312f30;
  box-sahdow: 3px 3px 5px #282828;
  align-self: start;
  width: 310px;
`;

const NameImageWrapper = styled.div`
  display: flex;
  color: #fff;
  background: #768493;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border: solid white 2px;
  border-radius: 50%;
  align-self: center;
  margin-right: 1rem;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const RecipeSettingWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1rem solid #313030;
`;

const RecipeCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

class UserAccountInfo extends Component {
  render() {
    return (
      <Wrapper>
        <NameImageWrapper>
          <ProfileImage src={profile_image} />
          <NameWrapper>
            <h3>Jesse Perdue</h3>
            <p>@jesse_perdue</p>
          </NameWrapper>
        </NameImageWrapper>
        <RecipeSettingWrapper>
          <RecipeCountWrapper>
            <h5>Recipes</h5>
            <h4>25</h4>
          </RecipeCountWrapper>
        </RecipeSettingWrapper>
      </Wrapper>
    );
  }
}

export default UserAccountInfo;
