import React, { useState } from "react";
import { Navbar, Header, List } from "./components";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 1090px;
  padding: 0 15px 15px;
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
      <Navbar
        cartIds={cartIds}
        clearCart={clearCart}
        removeGameById={removeGameById}
      />
      <StyledContainer>
        <Header />
        <StyledList>
          <List cartIds={cartIds} addGameIdToCart={addGameIdToCart} />
        </StyledList>
      </StyledContainer>
    </>
  );
}

export default App;
