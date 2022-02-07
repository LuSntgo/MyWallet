import { React, useState, useContext } from "react";
import { Container, StyledLink } from "./style";
import { useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import Input from "../Input";
import BigLogo from "../BigLogo";
import { Button } from "../Button";
import Loading from "../Loading";
import { login } from "../../services/mywallet";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = login({ email, password });

    promise.then((response) => {
      setUser(response.data);
      navigate("/home");
    });

    promise.catch(() => {
      alert("Confira seus dados e tente novamente");
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={handleLogin}>
        <Input
          disabled={isLoading}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
        ></Input>
        <Input
          disabled={isLoading}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Senha"
        ></Input>

        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loading /> : "Entrar"}
        </Button>
      </form>
      <StyledLink to="/sign-up">Não possui conta? Cadastre-se</StyledLink>
    </Container>
  );
}

export default LoginPage;
