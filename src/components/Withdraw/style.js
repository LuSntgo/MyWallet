import styled from "styled-components";

const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  z-index: 320;

  .title {
    min-height: 3vh;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;
const Container = styled.div`
  min-height: 80vh;
  min-width: 30vh;

  margin-left: 30px;
  margin-right: 30px;

  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  form {
    margin-top: 2vh;
  }
`;
export { Header, Container };
