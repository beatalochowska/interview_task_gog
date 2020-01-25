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
      <GameCard
        link="./images/card1.png"
        title="oddworld: stranger’s wrath"
        price="9.99"
      />
      <GameCard
        link="./images/card2.png"
        title="chaos on deponia"
        price="9.99"
      />
      <GameCard
        link="./images/card3.png"
        title="The settlers 2: gold  edition"
        price="9.99"
      />
      <GameCard
        link="./images/card4.png"
        title="neverwinter nights"
        price="4.99"
      />
      <GameCard
        link="./images/card5.png"
        title="assassin’s creed:  director’s cut"
        price="9.99"
      />
    </StyledList>
  );
}

export default GameList;
