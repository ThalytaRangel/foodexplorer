import { Container } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <footer>
        <div>
          <BsFillHexagonFill id="icon" />
          <h1>food explorer</h1>
        </div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </footer>
    </Container>
  );
}
