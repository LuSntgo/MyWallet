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
const Statement = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  position: relative;
  .center {
    width: 180px;
    height: 50px;
    display: flex;
    margin: auto;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    p {
      font-weight: bold;
    }
  }
`;

const Total = styled.div`
  width: 80%;
  position: fixed;
  bottom: 160px;
  display: flex;
  justify-content: space-between;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  .red {
    color: red;
  }
  .green {
    color: green;
  }
`;

export { Container, Statement, Total };
