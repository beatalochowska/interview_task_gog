import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 370px;
  height: 65px;
  background-color: #f7f7f7;
  text-transform: uppercase;
`;

function CartContent() {
  return (
    <>
      <StyledContent>Items in cart</StyledContent>
    </>
  );
}

export default CartContent;
