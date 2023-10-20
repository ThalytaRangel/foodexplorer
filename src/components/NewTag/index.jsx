import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NewTag({ isNew, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" readOnly={!isNew} {...rest} />
      <button type="button">{isNew ? <FiPlus /> : <FiX />}</button>
    </Container>
  );
}
