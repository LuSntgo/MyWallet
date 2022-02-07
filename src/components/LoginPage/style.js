import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;

  margin-left: 30px;
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
`;
export { Container, StyledLink };
