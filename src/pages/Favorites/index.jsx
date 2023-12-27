import { Container, Content, Card } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import DishImg from "../../assets/salada.png";

export function Favorites() {
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <h2>Meus favoritos</h2>
          <div className="favorites">
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
            <Card>
              <img src={DishImg} alt="Salada Radish" />
              <div className="text">
                <h3>Salada Radish</h3>
                <button>Remover dos Favoritos</button>
              </div>
            </Card>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
