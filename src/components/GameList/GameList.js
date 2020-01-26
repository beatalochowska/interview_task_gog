import React from "react";
import GameCards from "./GameCard/GameCards";

import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function GameList() {
  return (
    <StyledList>
      <GameCards />
    </StyledList>
  );
}

export default GameList;
