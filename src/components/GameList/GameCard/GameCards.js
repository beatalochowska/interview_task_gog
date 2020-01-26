import React from "react";
import styled from "styled-components";
import PriceButton from "./PriceButton/PriceButton";

import gamesData from "../../../data/db";
import DiscountButton from "./DiscountButton/DiscountButton";

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
const StyledButtons = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  justify-content: flex-end;
`;

function GameCards() {
  return gamesData.map(({ id, title, price, link, sale }) => (
    <StyledCard key={id}>
      <img src={link} alt={title} />
      <StyledGameTitle>{title}</StyledGameTitle>
      <StyledButtons>
        <DiscountButton sale={sale} />
        <PriceButton price={price} />
      </StyledButtons>
    </StyledCard>
  ));
}

export default GameCards;
