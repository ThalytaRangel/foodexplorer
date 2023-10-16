import { Container, Content, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTxt } from "../../components/ButtonTxt";
import { Tag } from "../../components/Tag";
import { IoIosArrowBack } from "react-icons/io";

export function PlateDetails() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonTxt title="voltar" icon={IoIosArrowBack} />
        <main>
          <img
            src="../../assets/maskgroup.png"
            alt="Foto da Salada Ravanello"
          />
          <div id="info">
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <Ingredients>
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </Ingredients>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
