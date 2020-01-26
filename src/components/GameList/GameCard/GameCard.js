import React from "react";
import styled from "styled-components";
import PriceButton from "./PriceButton/PriceButton";

import gamesData from "../../../data/db";

const StyledCard = styled.div`
  background-color: rgb(222, 222, 222);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  width: 196px;
  height: 185px;
  position: relative;
`;
const StyledGameTitle = styled.div`
  font-size: 14px;
  font-family: "Source Sans Pro";
  color: rgb(33, 33, 33);
  text-transform: uppercase;
  line-height: 1.214;
  font-weight: 600;
  margin: 10px;
`;

function GameCard() {
  return gamesData.map(function(x) {
    return (
      <StyledCard>
        <img src={x.link} />
        <StyledGameTitle>{x.title}</StyledGameTitle>
        <PriceButton price={x.price} />
      </StyledCard>
    );
  });
}

export default GameCard;
