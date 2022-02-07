import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  border: none;
  background: #a328d6;
  color: #ffffff;
  font-weight: bold;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  margin-bottom: 10px;
  border-radius: 5px;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #c46fe9;
  }
`;
const CancelButton = styled.button`
  width: 84px;
  height: 35px;
  background: #ffffff;
  border: none;
  color: #a328d6;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  margin-bottom: 5px;
  border-radius: 5px;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #c46fe9;
  }
`;
const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  background: #a328d6;
  border: none;
  color: #ffffff;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  border-radius: 5px;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #c46fe9;
  }
`;
export { Button, CancelButton, SaveButton };
