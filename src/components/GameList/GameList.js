import React from "react";
import GameCard from "./GameCard/GameCard";

import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function GameList() {
  return (
    <StyledList>
      <GameCard />
    </StyledList>
  );
}

export default GameList;
