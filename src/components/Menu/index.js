import React from "react";
import { Footer, Icon, StyledLink } from "./style";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function Menu() {
  return (
    <>
      <Footer>
        <StyledLink to="/home/deposit">
          <Icon>
            <BsPlusCircle />
          </Icon>
          Nova entrada
        </StyledLink>

        <StyledLink to="/home/withdraw">
          <Icon>
            <BsDashCircle />
          </Icon>
          Nova saída
        </StyledLink>
      </Footer>
    </>
  );
}
