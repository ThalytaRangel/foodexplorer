import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
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
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Exemplo: examplo@examplo.com"
            className="input-newStyle"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            className="input-newStyle"
          />
        </div>
        <Button id="btn-register" title="Criar Conta" />
        <a href="/">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
