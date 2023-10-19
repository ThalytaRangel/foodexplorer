import { Container } from "./styles";

export function Input({ type = "text", placeholder = "text", ...rest }) {
  return (
    <Container {...rest}>
      <input type={type} placeholder={placeholder} />
    </Container>
  );
}
