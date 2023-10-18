import { Container } from "./styles";

export function BtnHeader({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
