import styled from "styled-components";

export default function Money({ money }) {
  const { value, description, type, date } = money;
  return (
    <Container>
      <LeftSide>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </LeftSide>
      <RightSide>
        <Value type={type}>{value}</Value>
      </RightSide>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  display: flex;

  word-wrap: break-word;
  word-break: break-all;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 10px;
`;
const Date = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #c6c6c6;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const RightSide = styled.div`
  display: flex;
  gap: 10px;
`;

const Value = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.type === "deposit" ? "green" : "red")};
`;
