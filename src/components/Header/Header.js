import React from "react";
import styled from "styled-components";

const StyledSliderImage = styled.img.attrs({
  src: "./images/game_slider.png"
})`
  width: 1060px;
  height: 370px;
`;

const StyledHeader = styled.div`
  font-size: 15px;
  color: rgb(38, 38, 38);
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 40px 0 20px;
`;

function Header() {
  return (
    <>
      <StyledHeader>Game of the week</StyledHeader>
      <StyledSliderImage />
    </>
  );
}

export default Header;
