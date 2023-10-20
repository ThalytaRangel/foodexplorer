import { Container, Content, Form, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTxt } from "../../components/ButtonTxt";
import { Input } from "../../components/Header/styles";
import { NewTag } from "../../components/NewTag";

import { IoIosArrowBack } from "react-icons/io";

export function NewDish() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonTxt icon={IoIosArrowBack} title="voltar" />
        <Form>
          <h2>Adicionar prato</h2>
          <div id="infos">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <Input type="file" placeholder="Selecione imagem" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Nome do prato</label>
              <Input type="text" placeholder="Ex.: Salada Ceasar" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria">
                <option value="refeição">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
          </div>
          <Ingredients>
            <NewTag />
          </Ingredients>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
