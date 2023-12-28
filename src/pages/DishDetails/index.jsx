import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, DishIngredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import dishPlaceholder from "../../assets/dishPlaceholder.png";
import { ButtonTxt } from "../../components/ButtonTxt";
import { AddToCart } from "../../components/AddToCart";
import { Ingredient } from "../../components/Ingredient";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function DishDetails() {
  const [dish, setDish] = useState(null);
  const params = useParams();

  const dishImgURL = dish?.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : dishPlaceholder;

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
        <ButtonTxt title="voltar" icon={IoIosArrowBack} />
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
              <div id="cartSelector">
                <AddToCart />
                <Button title={`incluir ∙ ${dish.price}`} />
              </div>
            </div>
          </main>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
