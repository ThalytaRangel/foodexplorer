import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Logo />
      <Form>
        <h2>Faça login</h2>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input type="email" placeholder="Exemplo: examplo@examplo.com" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input type="password" placeholder="No mínimo 6 caracteres" />
        </div>
        <Button id="btn-signIn" title="Entrar" />
        <a href="/">Criar uma conta</a>
      </Form>
    </Container>
  );
}