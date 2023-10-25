import { Container, Content, Form, InputFile, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTxt } from "../../components/ButtonTxt";
import { Input } from "../../components/Header/styles";
import { NewTag } from "../../components/NewTag";

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

export function NewDish() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonTxt className="back" icon={IoIosArrowBack} title="voltar" />
        <Form>
          <h2>Adicionar prato</h2>
          <div className="infos">
            <InputFile>
              <label htmlFor="image">Imagem do prato</label>
              <label className="input-image">
                <FiUpload /> Selecione imagem
                <input id="image" type="file" />
              </label>
            </InputFile>
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
                <NewTag value="Pão Naan" />
                <NewTag isNew placeholder="Adicionar" />
              </Ingredients>
            </div>
            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <Input id="price" type="text" placeholder="R$ 00,00" />
            </div>
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows="5"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </div>

          <button className="btn-save">Salvar alterações</button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
