import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  height: 264px;
  width: 312px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  padding: 2px;
  margin: 1rem;
  overflow: hidden;
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;

const TitleNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH4 = styled.h4`
  color: #222;
  margin: 0;
`;

const StyledP = styled.p`
  font-size: 15px;
  margin: 0;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #ed6533;
  border-radius: 5px;
  color: white;
  padding: 5px 20px;
  width: 100px;
  margin: 0 5px;
  &:hover {
    background: #8b0000;
  }
`;

const RecipeCard = ({ image, title, user }) => (
  <div>
    <CardWrapper>
      <Image src={image} />
      <InnerWrapper>
        <TitleNameWrapper>
          <StyledH4>{title}</StyledH4>
          <StyledP>{user}</StyledP>
        </TitleNameWrapper>
        <StyledButton>View</StyledButton>
      </InnerWrapper>
    </CardWrapper>
  </div>
);

export default RecipeCard;
