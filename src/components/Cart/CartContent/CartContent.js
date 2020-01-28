import React from "react";
import styled from "styled-components";
import Cart from "../Cart";
import ClearButton from "./ClearButton/ClearButton";
import GameInCart from "./GamiInCart/GameInCart";

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

function CartContent() {
  return (
    <>
      <StyledGamesInCart>
        <StyledContent>
          <div>
            <Cart /> Items in cart
          </div>
          <div>
            $ 15.97
            <ClearButton />
          </div>
        </StyledContent>
        <StyledSeparator />
        <GameInCart />
      </StyledGamesInCart>
    </>
  );
}

export default CartContent;
