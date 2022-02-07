import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  height: 6vh;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  z-index: 320;

  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;

  h1 {
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
  }
`;
const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 28px;
  line-height: 22px;
  font-weight: bold;
`;

export { Header, StyledLink };
