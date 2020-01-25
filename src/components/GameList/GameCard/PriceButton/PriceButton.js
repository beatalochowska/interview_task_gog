import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  height: 25px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #a6a6a6;
  border-radius: 3px;
  font-size: 13px;
  font-family: "Source Sans Pro";
  color: #747474;
  line-height: 13px;
  background-color: #dedede;
  padding: 5px 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
`;

function PriceButton(props) {
  return (
    <>
      <StyledButton type="StyledButton">$ {props.price} </StyledButton>
    </>
  );
}

export default PriceButton;
