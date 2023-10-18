import { Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function AddToCart() {
  return (
    <Container>
      <button id="minus">
        <AiOutlineMinus />
      </button>
      <span>01</span>
      <button id="plus">
        <AiOutlinePlus />
      </button>
    </Container>
  );
}
