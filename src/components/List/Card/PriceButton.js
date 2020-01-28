import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: #a6a6a6;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #747474;
  line-height: 13px;
  background-color: #dedede;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;

  &:hover {
    background-color: #d1d1d1;
  }
`;

function PriceButton({ price, handleClick }) {
  return (
    <StyledButton type="button" onClick={handleClick}>
      $ {price}
    </StyledButton>
  );
}

export default PriceButton;
