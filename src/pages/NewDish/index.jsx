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
          <div className="infos">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <Input id="image-input" type="file" />
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
          <div className="infos">
            <div id="label">
              <h3>Ingredientes</h3>
              <Ingredients>
                <NewTag value="pão naan" />
                <NewTag isNew placeholder="Nova Tag" />
              </Ingredients>
            </div>
            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <Input id="price" type="text" placeholder="R$ 00,00" />
            </div>
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
