import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h2>Faça login</h2>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="exemplo@examplo.com"
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
        <Button id="btn-signIn" title="Entrar" onClick={handleSignIn} />
        <a href="/register">Criar uma conta</a>
      </Form>
    </Container>
  );
}
