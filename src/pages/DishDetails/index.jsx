import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Container, Content, DishIngredients } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { ButtonTxt } from "../../components/ButtonTxt";
import { AddToCart } from "../../components/AddToCart";
import { Button } from "../../components/Button";
import dishPlaceholder from "../../assets/dishPlaceholder.png";
import { useAuth } from "../../hooks/auth";

import { IoIosArrowBack } from "react-icons/io";

import { api } from "../../services/api";

export function DishDetails() {
  const [dish, setDish] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const dishImgURL = dish?.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : dishPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setDish(response.data);
    }
    fetchDishes();
  }, [params.id]);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonTxt title="voltar" icon={IoIosArrowBack} onClick={handleBack} />
        {dish && (
          <main>
            <img src={dishImgURL} alt="Foto da Salada Ravanello" />
            <div id="info">
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              {dish.ingredients && (
                <DishIngredients>
                  {dish.ingredients.map(ingredient => (
                    <Ingredient
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))}
                </DishIngredients>
              )}

              {user?.admin ? (
                <Link to={`/edit/${dish.id}`}>
                  <Button id="btn-edit" title="Editar Prato" />
                </Link>
              ) : (
                <div id="cartSelector">
                  <AddToCart />
                  <Button
                    onClick={handleBack}
                    title={`incluir ∙ R$ ${dish?.price?.toFixed(2)}`}
                  />
                </div>
              )}
            </div>
          </main>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
