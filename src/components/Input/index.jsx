import { Container } from "./styles";

export function Input({ type, placeholder, value, ...rest }) {
  return (
    <Container {...rest}>
      <input type={type} placeholder={placeholder} value={value} />
    </Container>
  );
}
