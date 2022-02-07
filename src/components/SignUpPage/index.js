import React, { useState } from "react";
import { signUp } from "../../services/mywallet";
import { Container, StyledLink } from "./style";
import { useNavigate } from "react-router-dom";
import ToastAnimated, { showToast } from "../ui-lib";
//import "react-toastify/dist/ReactToastify.css";

import Loading from "../Loading";
import { Button } from "../Button";
import Input from "../Input";
import BigLogo from "../BigLogo";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = signUp({ name, email, password });
    if (password !== confirmPassword) {
      showToast({
        type: "error",
        message: "As senhas não são iguais. Tente novamente",
      });
      setIsLoading(false);
    } else {
      promise.then(() => navigate("/"));
      setIsLoading(true);
    }
    promise.catch(() => {
      showToast({
        type: "error",
        message: "Confira seus dados e tente novamente",
      });
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <ToastAnimated />
      <BigLogo />
      <form onSubmit={handleSignUp}>
        <Input
          disabled={isLoading}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Nome"
        />
        <Input
          disabled={isLoading}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="E-mail"
        />
        <Input
          disabled={isLoading}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Senha"
        />

        <Input
          disabled={isLoading}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="password"
          placeholder="Confirme sua senha"
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loading /> : "Cadastrar"}
        </Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
