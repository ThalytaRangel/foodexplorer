import { Container } from "./styles";

export function Sections({ title, children, isAdmin }) {
  return (
    <Container isAdmin={isAdmin}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
