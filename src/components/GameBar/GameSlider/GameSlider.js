import React from "react";
import styled from "styled-components";

const StyledSliderImage = styled.img.attrs({
  src: "./images/game_slider.png"
})`
  width: 1060px;
  height: 370px;
`;

function GameSlider() {
  return <StyledSliderImage />;
}

export default GameSlider;
