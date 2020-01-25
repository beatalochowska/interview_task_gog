import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1090px;
  height: 56px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

const StyledTopBar = styled.div`
  height: 56px;
  width: 100%;
  background-color: #dedede;
  background-image: linear-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 15px 50px 0 rgba(0, 0, 0, 0.15);
`;

const StyledLogo = styled.img.attrs({
  src: "./images/logo_classic.png"
})`
  width: 42px;
  height: 36px;
  margin: 10px 0;
`;

const StyledIconBackground = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.078);
  border-right: 1px solid rgba(0, 0, 0, 0.078);
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const StyledCartContent = styled.div`
  width: 370px;
  height: 65px;
  position: absolute;
  background-color: #f7f7f7;
  position: absolute;
  z-index: 10;
  display: none;
  top: 56px;
  right: 0;

  ${StyledIconBackground}:hover & {
    display: block;
  }
`;

const StyledCartIcon = styled.img.attrs({
  src: "./images/ico_cart.png"
})`
  opacity: 0.851;
  width: 17px;
  height: 15px;
`;

const StyledOrderNumber = styled.div`
  font-size: 14px;
  font-family: "Source Sans Pro";
  color: rgb(64, 64, 64);
  line-height: 1.2;
  text-align: left;
`;

const MenuBar = () => {
  return (
    <>
      <StyledTopBar>
        <StyledContainer>
          <StyledLogo />
          <StyledIconBackground>
            <StyledCartIcon />
            <StyledOrderNumber>2</StyledOrderNumber>
            <StyledCartContent />
          </StyledIconBackground>
        </StyledContainer>
      </StyledTopBar>
    </>
  );
};

export default MenuBar;
