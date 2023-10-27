import { Container } from "./styles";
import { AddToCart } from "../AddToCart";
import { Button } from "../Button";

import { AiOutlineHeart } from "react-icons/ai";

export function Card({ dishImg, title, description, price, ...rest }) {
  return (
    <Container {...rest}>
      <button className="cardBtn">
        <AiOutlineHeart />
      </button>
      <img className="dishImg" src={dishImg} alt="Imagem do prato" />
      <h2 className="dishTitle">{title}</h2>
      <p className="dishDescription">{description} </p>
      <strong className="price">{price}</strong>

      <div className="quantityItems">
        <AddToCart />
        <Button title="incluir" />
      </div>
    </Container>
  );
}
