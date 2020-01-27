import React from "react";
import styled from "styled-components";
import gamesData from "../../../../data/db";
import { StyledSeparator } from "../CartContent";

const StyledGameImage = styled.img`
  display: block;
  height: 60px;
  width: 100px;
  margin: 5px;
`;
const StyledRemove = styled.div`
  font-size: 12px;
  text-decoration: underline;
  display: none;
`;

const StyledCartPosition = styled.div`
  display: flex;
  &:hover ${StyledRemove} {
    display: block;
  }
`;

const StyledGameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 235px;
  margin: 10px;
`;

const StyledGameTitle = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Source Sans Pro";
  color: rgb(33, 33, 33);
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 190px;
`;

const StyledPrice = styled.div`
  font-size: 13px;
  color: rgba(64, 64, 64, 0.749);
`;

function GameInCart() {
  //   const cartContent = [1, 3];
  //   const isInCart = el => el === 1;
  //   const cartIndex = gamesData.findIndex(isInCart);
  //   console.log(cartIndex);
  return gamesData.map(({ id, title, price, link }) => (
    <>
      <StyledCartPosition>
        <StyledGameImage src={link} alt={title} />
        <StyledGameInfo>
          <div>
            <StyledGameTitle>{title}</StyledGameTitle>
            <StyledRemove>Remove</StyledRemove>
          </div>
          <StyledPrice>$ {price}</StyledPrice>
        </StyledGameInfo>
      </StyledCartPosition>
      <StyledSeparator />
    </>
  ));
}

export default GameInCart;
