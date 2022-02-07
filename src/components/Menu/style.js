import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.div`
  color: #ffffff;
  font-size: 20px;
  line-height: 22px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  background-color: #a328d6;
  border-radius: 5px;
  width: 156px;
  height: 114px;
  padding-left: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;
export { Footer, Icon, StyledLink };
