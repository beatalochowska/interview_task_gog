import React from "react";
import MenuBar from "./components/MenuBar/MenuBar";
import GameBar from "./components/GameBar/GameBar";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles/GlobalStyles";

const StyledContainer = styled.div`
  height: 100%;
  width: 1090px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MenuBar />
      <StyledContainer>
        <GameBar />
      </StyledContainer>
    </>
  );
}

export default App;
