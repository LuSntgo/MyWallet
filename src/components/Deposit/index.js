import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../ui-lib";
import UserContext from "../../contexts/UserContext";
import { addDeposit } from "../../services/mywallet";
import { Button } from "../Button";
import Input from "../Input";
import Loading from "../Loading";
import { Header, Container } from "./style";
import dayjs from "dayjs";

export default function Deposit() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "deposit",
    date: dayjs().format("DD/MM"),
  });
  const [isLoading, setIsLoading] = useState(false);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const navigate = useNavigate();

  function userDeposit(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleDeposit(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = addDeposit(formData, config);
    promise.then((response) => {
      navigate("/home");
    });
    promise.catch(() => {
      setIsLoading(false);
      showToast({
        type: "error",
        message: "Ops! Confira os dados e tente novamente",
      });
    });
  }

  return (
    <>
      <Header>
        <div className="title">
          <h1>Nova entrada</h1>
        </div>
      </Header>
      <Container>
        <form onSubmit={handleDeposit}>
          <Input
            disabled={isLoading}
            name="value"
            type="number"
            pattern="(?:\.|,|[0-9])*"
            onChange={userDeposit}
            value={formData.value}
            placeholder="Valor"
          ></Input>
          <Input
            disabled={isLoading}
            name="description"
            type="text"
            onChange={userDeposit}
            placeholder="Descrição"
          ></Input>

          <Button disabled={isLoading} type="submit">
            {isLoading ? <Loading /> : "Salvar entrada"}
          </Button>
        </form>
      </Container>
    </>
  );
}
