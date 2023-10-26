import { Container } from "./styles";
import bannerImg from "../../assets/banner-img.png";

export function Banner() {
  return (
    <Container>
      <img src={bannerImg} alt="Imagem do Banner" />
      <div className="text">
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  );
}
