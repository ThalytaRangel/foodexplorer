import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Você precisa preencher todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro");
        }
      });
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            className="input-newStyle"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Exemplo: examplo@examplo.com"
            className="input-newStyle"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            className="input-newStyle"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button id="btn-register" title="Criar Conta" onClick={handleSignUp} />
        <a href="/">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
