import React from "react";
import styled from "styled-components";
import PriceButton from "./PriceButton/PriceButton";

import gamesData from "../../../data/db";
import DiscountButton from "./DiscountButton/DiscountButton";

const StyledCard = styled.div`
  background-color: rgb(222, 222, 222);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  width: 196px;
`;

const StyledGameImage = styled.img`
  display: block;
`;

const StyledGameTitle = styled.div`
  color: rgb(33, 33, 33);
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px;
  height: 30px;
`;
const StyledButtons = styled.div`
  float: right;
  padding: 0 10px 10px 0;
  display: flex;
  justify-content: flex-end;
`;

function GameCards() {
  return gamesData.map(({ id, title, price, link, sale, status }) => (
    <StyledCard key={id}>
      <StyledGameImage src={link} alt={title} />
      <StyledGameTitle>{title}</StyledGameTitle>
      <StyledButtons>
        <DiscountButton sale={sale} />
        <PriceButton price={price} title={title} status={status} />
      </StyledButtons>
    </StyledCard>
  ));
}

export default GameCards;
