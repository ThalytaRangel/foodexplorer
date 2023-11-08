import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function ButtonTxt({ title, icon: Icon, ...rest }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container type="button" {...rest} onClick={handleBack}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
