import { Container } from "./styles";

export function Input({
  type = "text",
  placeholder = "text",
  value = "text",
  ...rest
}) {
  return (
    <Container {...rest}>
      <input type={type} placeholder={placeholder} value={value} />
    </Container>
  );
}
