import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Sections } from "../../components/Sections";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import spagietti from "../../assets/spaguetti.png";
import torradas from "../../assets/torradas.png";
import salada from "../../assets/salada.png";
import expresso from "../../assets/expresso.png";
import macarrons from "../../assets/macarrons.png";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Banner />
        <Sections title="Refeições">
          <Card
            dishImg={spagietti}
            title={"Spaguetti Gambe >"}
            description={"Massa fresca com camarões e pesto."}
            price={"R$ 79,97"}
          />
          <Card
            dishImg={torradas}
            title={"Torradas de Parma >"}
            description={
              "Presunto de parma e rúcula em um pão com fermentação natural."
            }
            price={"R$ 25,97"}
          />
          <Card
            dishImg={salada}
            title={"Salada Ravanello >"}
            description={
              "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
            }
            price={"R$ 25,00"}
          />
        </Sections>
        <Sections title="Sobremesas">
          <Card
            dishImg={macarrons}
            title={"Macarons >"}
            description={"Farinha de amêndoas, manteiga, claras e açúcar."}
            price={"R$ 32,97"}
          />
          <Card
            dishImg={macarrons}
            title={"Macarons >"}
            description={"Farinha de amêndoas, manteiga, claras e açúcar."}
            price={"R$ 32,97"}
          />
          <Card
            dishImg={macarrons}
            title={"Macarons >"}
            description={"Farinha de amêndoas, manteiga, claras e açúcar."}
            price={"R$ 32,97"}
          />
        </Sections>
        <Sections title="Bebidas">
          <Card
            dishImg={expresso}
            title={"Expresso >"}
            description={
              "Café cremoso feito na temperatura e pressões perfeita"
            }
            price={"R$ 15,97"}
          />
          <Card
            dishImg={expresso}
            title={"Expresso >"}
            description={
              "Café cremoso feito na temperatura e pressões perfeita"
            }
            price={"R$ 15,97"}
          />
          <Card
            dishImg={expresso}
            title={"Expresso >"}
            description={
              "Café cremoso feito na temperatura e pressões perfeita"
            }
            price={"R$ 15,97"}
          />
        </Sections>
      </Content>
      <Footer />
    </Container>
  );
}
