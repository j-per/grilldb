import React, { Component } from "react";
import profile_image from "../../images/jesse.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-radius: 5px;
  flex-direction: column;
  background: #f9f6f1;
  color: white;
  position: relative;
  color: #312f30;
  box-sahdow: 3px 3px 5px #282828;
  align-self: start;
  width: 350px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const NameImageWrapper = styled.div`
  display: flex;
  color: #fff;
  background: #768493;
  padding: 20px;
  border-radius: 5px 5px 0 0;
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
  justify-content: space-between;
`;

const RecipeCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  h4 {
    color: #6f7d8a;
  }
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
          <RecipeCountWrapper>
            <h5>Followers</h5>
            <h4>234</h4>
          </RecipeCountWrapper>
        </RecipeSettingWrapper>
      </Wrapper>
    );
  }
}

export default UserAccountInfo;
