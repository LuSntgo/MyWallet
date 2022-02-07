import { useState, useEffect, useContext } from "react";
import { Container, Statement, Total } from "./style";
import Top from "../Top";
import Menu from "../Menu";
import Money from "../Money";
import UserContext from "../../contexts/UserContext";
import { getTransaction } from "../../services/mywallet";

export default function HomePage() {
  const [formData, setFormData] = useState([]);
  const { user } = useContext(UserContext);
  const [userTotal, setUserTotal] = useState(0);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    renderHomePage();
  }, []);

  useEffect(mathTotal, [formData]);

  function renderHomePage() {
    const promise = getTransaction(config);
    promise.then((response) => {
      setFormData(response.data);
    });
  }
  function mathTotal() {
    let totalDeposit = 0;
    let totalWithdraw = 0;

    for (let i = 0; i < formData.length; i++) {
      if (formData[i].type === "deposit") {
        const depositValue = formData[i].value;
        totalDeposit += parseFloat(depositValue);
      } else {
        const withdrawValue = formData[i].value;
        totalWithdraw += parseFloat(withdrawValue);
      }
      setUserTotal((totalDeposit - totalWithdraw).toFixed(2));
    }
  }
  return (
    <>
      <Container>
        <Top />
        <Statement>
          {formData.length === 0 ? (
            <div className="center">
              <span>Não há registros de entrada ou saída</span>
            </div>
          ) : (
            formData.map((r, i) => <Money money={r} key={i} />)
          )}
          <Total>
            <p>Saldo</p>{" "}
            <span className={userTotal >= 0 ? "green" : "red"}>
              {userTotal}
            </span>
          </Total>
        </Statement>
        <Menu />
      </Container>
    </>
  );
}
