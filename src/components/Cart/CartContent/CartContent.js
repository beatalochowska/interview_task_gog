import React from "react";
import styled from "styled-components";
import Cart from "../Cart";
import ClearButton from "./ClearButton/ClearButton";

const StyledContent = styled.div`
  width: 370px;
  background-color: #f7f7f7;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  font-family: "Source Sans Pro";
  line-height: 1.2;
  text-align: left;
  padding: 9px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function CartContent() {
  return (
    <>
      <StyledContent>
        <div>
          <Cart /> Items in cart
        </div>
        <div>
          $ 15.97
          <ClearButton />
        </div>
      </StyledContent>
    </>
  );
}

export default CartContent;
