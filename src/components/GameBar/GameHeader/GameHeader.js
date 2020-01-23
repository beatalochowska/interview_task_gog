import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 15px;
  font-family: "Source Sans Pro";
  color: rgb(38, 38, 38);
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
`;

function GameHeader() {
  return (
    <>
      <StyledHeader>game of the week</StyledHeader>
    </>
  );
}

export default GameHeader;
