import React from "react";
import styled from "styled-components";

const TopBar = styled.div`
  height: 56px;
  width: 100%;
  background-color: #dedede;
  background-image: linear-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 15px 50px 0 rgba(0, 0, 0, 0.15);
`;

const Logo = styled.img.attrs({
  src: "./images/logo_classic.png"
})`
  position: absolute;
  left: 111px;
  top: 12px;
  width: 39px;
`;

const IconBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  border-left: 1px solid rgba(0, 0, 0, 0.078);
  border-right: 1px solid rgba(0, 0, 0, 0.078);
  position: absolute;
  left: 1114px;
  top: 0px;
  width: 56px;
  height: 56px;
`;

const CartIcon = styled.img.attrs({
  src: "./images/ico_cart.png"
})`
  position: absolute;
  left: 14px;
  opacity: 0.851;
  top: 21px;
  width: 17px;
  height: 15px;
`;

const OrderNumber = styled.div`
  position: absolute;
  font-size: 14px;
  font-family: "Source Sans Pro";
  color: rgb(64, 64, 64);
  line-height: 1.2;
  text-align: left;
  top: 20.1px;
  right: 15px;
`;

const MenuBar = () => {
  return (
    <>
      <TopBar />
      <Logo />
      <IconBackground>
        <CartIcon />
        <OrderNumber>2</OrderNumber>
      </IconBackground>
    </>
  );
};

export default MenuBar;
