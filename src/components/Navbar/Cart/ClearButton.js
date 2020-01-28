import React from "react";
import styled from "styled-components";

const StyledClearButton = styled.button`
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  text-align: center;
  background-image: linear-gradient(
    rgb(182, 90, 226) 0%,
    rgb(122, 61, 198) 100%
  );
  border-width: 1px;
  border-style: solid;
  border-color: rgb(122, 61, 198);
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  padding: 16px 28px;
  margin-left: 10px;
  cursor: pointer;

  transition: background-image 1s ease-in-out;

  &:hover {
    background-image: linear-gradient(
      rgb(182, 90, 226) 100%,
      rgb(122, 61, 198) 0%
    );
    transition: background-image 1s ease-in-out;
  }
`;

function ClearButton({ handleClick }) {
  return (
    <StyledClearButton onClick={handleClick}>Clear cart</StyledClearButton>
  );
}

export default ClearButton;
