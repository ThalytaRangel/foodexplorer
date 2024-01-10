import { Container } from "./styles";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function AddToCart() {
  const [quantityOfItems, setQuantityOfItems] = useState("01");

  function increase() {
    if (Number(quantityOfItems) < 9) {
      let newMinutes = Number(quantityOfItems) + 1;
      setQuantityOfItems(`0${newMinutes}`);
    }
  }

  function decrease() {
    if (Number(quantityOfItems) > 1) {
      let newMinutes = Number(quantityOfItems) - 1;
      setQuantityOfItems(`0${newMinutes}`);
    }
  }

  return (
    <Container>
      <button id="minus" onClick={decrease}>
        <AiOutlineMinus />
      </button>
      <span className="quantity">{quantityOfItems}</span>
      <button id="plus" onClick={increase}>
        <AiOutlinePlus />
      </button>
    </Container>
  );
}
