import React from "react";
import styled from "styled-components";
import gamesData from "db";
import ClearButton from "./ClearButton";
import GameInCart from "./GameInCart";

const StyledGamesInCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  background-color: #f7f7f7;
`;

const StyledContent = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  text-align: left;
  padding: 9px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
`;

function CartContent({ cartIds, clearCart, removeGameById }) {
  const gamesInCart = cartIds.map(id => gamesData.find(game => game.id === id));
  const price = gamesInCart.reduce((acc, game) => {
    return (acc += game.price);
  }, 0);
  return (
    <>
      <StyledGamesInCart>
        <StyledContent>
          <div>
            {`${cartIds.length} ${cartIds.length === 1 ? "item" : "items"}`} in
            cart
          </div>
          <div>
            $ {price}
            <ClearButton handleClick={clearCart} />
          </div>
        </StyledContent>
        <StyledSeparator />
        <GameInCart gamesInCart={gamesInCart} removeGameById={removeGameById} />
      </StyledGamesInCart>
    </>
  );
}

export default CartContent;
