import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: #a6a6a6;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #747474;
  line-height: 13px;
  background-color: #dedede;
  padding: 5px 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
`;

const StyledOwnedButton = styled(StyledButton)`
  opacity: 0.5;
`;

export const UnclickableButton = ({ text }) => (
  <StyledButton type="button">{text}</StyledButton>
);

export const UnclickableOwnedButton = ({ text }) => (
  <StyledOwnedButton type="button">{text}</StyledOwnedButton>
);
