import React from "react";
import styled from "styled-components";

import PriceButton from "../GameList/GameCard/PriceButton/PriceButton";
import {
  UnclickableButton,
  UnclickableOwnedButton
} from "./GameCard/UnclicableButton/UnclicableButton";
import gamesData from "../../data/db";
import DiscountButton from "../GameList/GameCard/DiscountButton/DiscountButton";

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

const StyledOwnedGameTitle = styled(StyledGameTitle)`
  opacity: 0.5;
`;

const StyledButtons = styled.div`
  float: right;
  padding: 0 10px 10px 0;
  display: flex;
  justify-content: flex-end;
`;

function GameList({ cartIds, addGameIdToCart }) {
  return gamesData
    .map(game => ({
      ...game,
      isInCart: !!cartIds.find(gameId => gameId === game.id)
    }))
    .map(({ id, title, price, link, sale, isOwned, isInCart }) => (
      <StyledCard key={id}>
        <StyledGameImage src={link} alt={title} />
        {isOwned ? (
          <StyledOwnedGameTitle>{title}</StyledOwnedGameTitle>
        ) : (
          <StyledGameTitle>{title}</StyledGameTitle>
        )}

        <StyledButtons>
          {!isOwned && !isInCart && (
            <>
              <DiscountButton sale={sale} />
              <PriceButton
                price={price}
                handleClick={event => {
                  event.preventDefault();
                  addGameIdToCart(id);
                }}
              />
            </>
          )}
          {isOwned && !isInCart && <UnclickableOwnedButton text="Owned" />}
          {isInCart && <UnclickableButton text="In cart" />}
        </StyledButtons>
      </StyledCard>
    ));
}

export default GameList;
