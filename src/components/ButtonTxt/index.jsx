import { Container } from "./styles";

export function ButtonTxt({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
