import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 144, 94);
  border-radius: 3px;
  font-size: 13px;
  font-family: "Source Sans Pro";
  color: #fff;
  line-height: 13px;
  background-color: rgb(0, 144, 94);
  padding: 5px 10px;
  margin-right: 5px;
`;

function DiscountButton(props) {
  return (
    <>
      <StyledButton type="button"> - {props.sale} </StyledButton>
    </>
  );
}

export default DiscountButton;
