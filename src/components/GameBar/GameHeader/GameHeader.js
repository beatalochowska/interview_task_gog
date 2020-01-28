import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 15px;
  color: rgb(38, 38, 38);
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 40px 0 20px;
`;

function GameHeader() {
  return (
    <>
      <StyledHeader>game of the week</StyledHeader>
    </>
  );
}

export default GameHeader;
