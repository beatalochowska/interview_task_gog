import React, { Fragment } from "react";
import styled from "styled-components";
import { StyledSeparator } from "./Cart";

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
  cursor: pointer;
`;

const StyledPrice = styled.div`
  font-size: 13px;
  color: rgba(64, 64, 64, 0.749);
`;

const StyledCartPosition = styled.div`
  display: flex;
  cursor: context-menu;
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
  color: rgb(33, 33, 33);
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 190px;
`;

function GameInCart({ gamesInCart, removeGameById }) {
  return gamesInCart.map(({ id, title, price, link }) => (
    <Fragment key={id}>
      <StyledCartPosition>
        <StyledGameImage src={link} alt={title} />
        <StyledGameInfo>
          <div>
            <StyledGameTitle>{title}</StyledGameTitle>
            <StyledRemove
              onClick={event => {
                event.preventDefault();
                removeGameById(id);
              }}
            >
              Remove
            </StyledRemove>
          </div>
          <StyledPrice>$ {price}</StyledPrice>
        </StyledGameInfo>
      </StyledCartPosition>
      <StyledSeparator />
    </Fragment>
  ));
}

export default GameInCart;
