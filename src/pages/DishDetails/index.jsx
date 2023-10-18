import { Container, Content, DishIngredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import DishImg from "../../assets/salada.png";
import { ButtonTxt } from "../../components/ButtonTxt";
import { AddToCart } from "../../components/AddToCart";
import { Ingredient } from "../../components/Ingredient";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "../../components/Button";

export function DishDetails() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonTxt title="voltar" icon={IoIosArrowBack} />
        <main>
          <img src={DishImg} alt="Foto da Salada Ravanello" />
          <div id="info">
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <DishIngredients>
              <Ingredient title="alface" />
              <Ingredient title="cebola" />
              <Ingredient title="pão naan" />
              <Ingredient title="pepino" />
              <Ingredient title="rabanete" />
              <Ingredient title="tomate" />
            </DishIngredients>
            <div id="cartSelector">
              <AddToCart />
              <Button title="incluir ∙ R$ 25,00" />
            </div>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
