import { Container } from "./styles";
import { AddToCart } from "../AddToCart";
import { Button } from "../Button";
import { PiPencilSimple } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Card({ dishImg, title, description, price, ...rest }) {
  const { user } = useAuth();

  function addToFavorite() {
    const favorited = document.getElementById("btn-heart");
    favorited.classList.add("active");
  }
  return (
    <Container {...rest}>
      <div className="cardBtn">
        {user?.admin ? (
          <Link to="/edit/1">
            <PiPencilSimple id="btn-edit" />
          </Link>
        ) : (
          <AiOutlineHeart id="btn-heart" onClick={addToFavorite} />
        )}
      </div>
      <Link to="/details/1">
        <img className="dishImg" src={dishImg} alt="Imagem do prato" />
        <h2 className="dishTitle">{title}</h2>
      </Link>
      <p className="dishDescription">{description} </p>
      <strong className="price">{price}</strong>

      <div className="quantityItems">
        <AddToCart />
        <Button title="incluir" />
      </div>
    </Container>
  );
}
