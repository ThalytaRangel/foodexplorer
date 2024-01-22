import { Container } from "./styles";
import { AddToCart } from "../AddToCart";
import { Button } from "../Button";
import { PiPencilSimple } from "react-icons/pi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Card({
  dishId,
  dishImg,
  title,
  description,
  price,
  isFavorite,
  ...rest
}) {
  const { user } = useAuth();

  const [isMarked, setMarked] = useState(isFavorite);

  async function handleFavorites(dishId, isFavorite) {
    if (isFavorite) {
      const confirm = window.confirm(
        "O prato já está nos seus favoritos, deseja remove-lo?",
      );

      if (confirm) {
        await api.delete(`/favorites/${dishId}`);
        setMarked(false);
        return;
      }
    }

    await api.post(`/favorites/${dishId}`);
    setMarked(true);
  }

  return (
    <Container {...rest}>
      <div className="cardBtn">
        {user?.admin ? (
          <Link to={`/edit/${dishId}`}>
            <PiPencilSimple id="btn-edit" />
          </Link>
        ) : isMarked ? (
          <AiFillHeart
            className="btn-heart "
            onClick={() => handleFavorites(dishId, isFavorite)}
          />
        ) : (
          <AiOutlineHeart
            className="btn-heart "
            onClick={() => handleFavorites(dishId, isFavorite)}
          />
        )}
      </div>
      <Link to={`/details/${dishId}`}>
        <img className="dishImg" src={dishImg} alt="Imagem do prato" />
        <h2 className="dishTitle">{`${title} >`}</h2>
      </Link>
      <p className="dishDescription">{description} </p>
      <strong className="price">{price}</strong>

      {!user.admin && (
        <div className="quantityItems">
          <AddToCart />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}
