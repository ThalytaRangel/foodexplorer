import { Container } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";

export function Logo() {
  return (
    <Container>
      <BsFillHexagonFill id="logoIcon" />
      <h1>food explorer</h1>
    </Container>
  );
}
