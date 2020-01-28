import React, { useState } from "react";
import MenuBar from "./components/MenuBar/MenuBar";
import GameBar from "./components/GameBar/GameBar";
import GameList from "./components/GameList/GameList";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles/GlobalStyles";

const StyledContainer = styled.div`
  height: 100%;
  width: 1090px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function App() {
  const [cartIds, setCartIds] = useState([]);
  const addGameIdToCart = id => setCartIds(cartIds => [...cartIds, id]);
  const clearCart = () => setCartIds([]);
  const removeGameById = id =>
    setCartIds(cartIds => cartIds.filter(gameId => gameId !== id));
  return (
    <>
      <GlobalStyles />
      <MenuBar />
      <StyledContainer>
        <GameBar />
        <StyledList>
          <GameList cartIds={cartIds} addGameIdToCart={addGameIdToCart} />
        </StyledList>
      </StyledContainer>
    </>
  );
}

export default App;
