import { React, useContext } from "react";
import { IoExitOutline } from "react-icons/io5";
import { Header, StyledLink } from "./style";
import UserContext from "../../contexts/UserContext";

export default function Top() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header>
        <h1>Olá, {user.name}</h1>
        <StyledLink to="/">
          <IoExitOutline />
        </StyledLink>
      </Header>
    </>
  );
}
